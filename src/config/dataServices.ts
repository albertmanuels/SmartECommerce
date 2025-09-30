import { collection, getDocs } from "firebase/firestore"
import { db } from "./firebase"

export interface IProduct {
  id: number
  title: string
  price: number
  imageURL: string
}

export const getProductsData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"))
    const products = querySnapshot.docs.map(doc => doc.data())
    return products as IProduct[]
  } catch (error) {
    console.error("Error fetching products:", error)
  }
}