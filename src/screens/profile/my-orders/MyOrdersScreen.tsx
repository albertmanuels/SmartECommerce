import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import AppSafeView from "../../../components/views/AppSafeView";
import { vs } from "react-native-size-matters";
import { sharedPaddingHorizontal } from "../../../styles/sharedStyles";

import OrderDetailCard from "../../../components/cards/OrderDetailCard";
import { myOrders } from "../../../data/my-orders";

const MyOrdersScreen = () => {
  return (
    <AppSafeView>
      <View style={styles.container}>
        <FlatList
          data={myOrders}
          renderItem={({ item }) => <OrderDetailCard data={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingHorizontal: sharedPaddingHorizontal,
            paddingVertical: vs(10),
            gap: vs(12),
          }}
        />
      </View>
    </AppSafeView>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
