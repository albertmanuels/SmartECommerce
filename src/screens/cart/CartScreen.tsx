import { StyleSheet, View } from "react-native";
import React, { useMemo } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import CartItem from "../../components/cart/CartItem";
import { FlatList } from "react-native-gesture-handler";
import TotalView from "../../components/cart/TotalView";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  addItemToCart,
  removeItemFromCart,
  removeProductFromCart,
} from "../../store/reducers/cartSlice";
import { shippingFees, taxes } from "../../constants/constants";
import EmptyCart from "./EmptyCart";

const CartScreen = () => {
  const navigation = useNavigation();
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();

  const isCartEmpty = items.length === 0;

  const totalProductsPricesSum = useMemo(
    () => items.reduce((acc, item) => acc + item.sum, 0),
    [items]
  );

  const orderTotal = useMemo(() => {
    if (totalProductsPricesSum === 0) return 0;
    return (
      totalProductsPricesSum +
      shippingFees +
      (totalProductsPricesSum * taxes) / 100
    );
  }, [totalProductsPricesSum]);

  return (
    <AppSafeView>
      <HomeHeader />
      {isCartEmpty ? (
        <EmptyCart />
      ) : (
        <View style={{ paddingHorizontal: sharedPaddingHorizontal, flex: 1 }}>
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <CartItem
                data={{
                  ...item,
                  price: item.sum,
                }}
                onDeletePress={() => dispatch(removeProductFromCart(item))}
                onIncreasePress={() => dispatch(addItemToCart(item))}
                onDecreasePress={() => dispatch(removeItemFromCart(item))}
              />
            )}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
          />
          <TotalView
            itemsPrice={totalProductsPricesSum}
            orderTotal={orderTotal}
          />
          <AppButton
            title="Continue"
            onPress={() => navigation.navigate("CheckoutScreen" as never)}
          />
        </View>
      )}
    </AppSafeView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
