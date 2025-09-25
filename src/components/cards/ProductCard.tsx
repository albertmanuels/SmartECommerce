import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/AppColors";
import AppText from "../Texts/AppText";
import { AppFonts } from "../../styles/fonts";
import { Ionicons } from "@expo/vector-icons";
import { commonStyles } from "../../styles/sharedStyles";

interface ProductCardProps {
  onAddToCartPress: () => void;
  imageURL: string;
  title: string;
  price: number;
}

const ProductCard = ({
  onAddToCartPress,
  imageURL,
  title,
  price,
}: ProductCardProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={onAddToCartPress}
      >
        <Ionicons name="cart" size={s(15)} color={AppColors.white} />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: imageURL,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.titleText}>{title}</AppText>
        <AppText style={styles.priceText}>${price}</AppText>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: s(160),
    height: vs(190),
    backgroundColor: AppColors.white,
    borderRadius: s(10),
    ...commonStyles.shadow,
  },
  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
    height: vs(130),
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    paddingBottom: vs(15),
    paddingHorizontal: s(10),
    paddingTop: s(8),
  },
  titleText: {
    fontSize: s(14),
    fontFamily: AppFonts.Medium,
    color: AppColors.primary,
  },
  priceText: {
    fontSize: s(14),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginTop: vs(7),
  },
  addToCartButton: {
    height: s(28),
    width: s(28),
    borderRadius: s(14),
    position: "absolute",
    left: 5,
    top: 5,
    backgroundColor: AppColors.primary,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
