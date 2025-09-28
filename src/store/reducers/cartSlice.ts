import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  imageURL: string;
  qty: number;
  sum: number;
} 

const initialState = {
  items: [] as CartItem[]
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const existedItem = state.items.find(item => item.id === action.payload.id) 

      if(existedItem) {
        existedItem.qty += 1
        existedItem.sum += action.payload.price
      } else {
        state.items.push({
          ...action.payload,
          qty: 1,
          sum: action.payload.price
        })
      }
    },
    removeItemFromCart(state, action) {
      const existedItem = state.items.find(item => item.id === action.payload.id)
      
      if(existedItem) {
        if(existedItem.qty !== 1) {
          existedItem.qty -= 1
          existedItem.sum -= action.payload.price
        } else {
          state.items = state.items.filter(item => item.id !== action.payload.id)
        }
      }
    },
    removeProductFromCart(state, action) {
       state.items = state.items.filter(item => item.id !== action.payload.id)
    },
    emptyCart(state) {
      state.items = []
    }
  }
})

export const { addItemToCart, removeItemFromCart, removeProductFromCart, emptyCart } = cartSlice.actions
export default cartSlice.reducer