import { FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProductCard from "../../components/cards/ProductCard";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/reducers/cartSlice";
import { getProductsData, IProduct } from "../../config/dataServices";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchData = async () => {
    const data = await getProductsData();

    if (data) {
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppSafeView>
      <HomeHeader />
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
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
            onAddToCartPress={() => dispatch(addItemToCart(item))}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
