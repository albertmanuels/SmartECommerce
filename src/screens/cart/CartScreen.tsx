import { StyleSheet, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import CartItem from "../../components/cart/CartItem";
import { FlatList } from "react-native-gesture-handler";
import { carts } from "../../data/carts";
import TotalView from "../../components/cart/TotalView";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const navigation = useNavigation();

  return (
    <AppSafeView>
      <HomeHeader />
      <View style={{ paddingHorizontal: sharedPaddingHorizontal, flex: 1 }}>
        <FlatList
          data={carts}
          renderItem={({ item }) => (
            <CartItem
              data={item}
              onDeletePress={() => {}}
              onIncreasePress={() => {}}
              onDecreasePress={() => {}}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <TotalView itemsPrice={1599} orderTotal={1899} />
        <AppButton
          title="Continue"
          onPress={() => navigation.navigate("CheckoutScreen" as never)}
        />
      </View>
    </AppSafeView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
