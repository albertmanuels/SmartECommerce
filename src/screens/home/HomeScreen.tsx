import { FlatList, StyleSheet } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProductCard from "../../components/cards/ProductCard";
import { products } from "../../data/products";

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 10,
        }}
        contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 12 }}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            price={item.price}
            imageURL={item.imageURL}
            onAddToCartPress={() => {}}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
