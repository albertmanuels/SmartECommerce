import { StyleSheet, Text } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";

const CartScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <Text>CartScreen</Text>
    </AppSafeView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
