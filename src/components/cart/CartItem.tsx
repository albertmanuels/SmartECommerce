import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../Texts/AppText";
import { AppFonts } from "../../styles/fonts";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { AppColors } from "../../styles/AppColors";

interface ICartItemData {
  id: number;
  price: string | number;
  title: string;
  imageURL: string;
  qty: number;
}

interface ICartItemProps {
  data: ICartItemData;
  onDeletePress: () => void;
  onIncreasePress: () => void;
  onDecreasePress: () => void;
}

const CartItem = (props: ICartItemProps) => {
  const { data, onDeletePress, onIncreasePress, onDecreasePress } = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: data.imageURL,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.textTitle}>{data.title}</AppText>
        <AppText style={styles.textPrice}>${data.price}</AppText>

        <View style={styles.qtyContainer}>
          <Pressable style={styles.iconButton} onPress={onIncreasePress}>
            <FontAwesome name="plus" size={s(10)} color={AppColors.primary} />
          </Pressable>
          <AppText style={styles.textQty}>{data.qty}</AppText>
          <Pressable style={styles.iconButton} onPress={onDecreasePress}>
            <FontAwesome name="minus" size={s(10)} color={AppColors.primary} />
          </Pressable>
        </View>
      </View>
      <View style={styles.deleteContainer}>
        <Pressable style={styles.deleteButton} onPress={onDeletePress}>
          <AntDesign name="delete" size={s(14)} color={AppColors.redColor} />
          <AppText style={styles.deleteText}>Delete</AppText>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: vs(4),
    borderColor: AppColors.blueGray,
  },
  imageContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 3.5,
  },
  deleteContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingEnd: s(12),
  },
  image: {
    width: s(80),
    height: s(80),
    resizeMode: "cover",
    borderRadius: s(5),
  },
  textTitle: {
    fontSize: s(14),
    fontFamily: AppFonts.Medium,
    marginTop: vs(5),
  },
  textPrice: {
    fontSize: s(16),
    fontFamily: AppFonts.Bold,
    marginVertical: vs(5),
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteText: {
    marginLeft: s(7),
    fontSize: s(12),
    fontFamily: AppFonts.Medium,
    color: AppColors.medGray,
    marginTop: 3,
  },
  qtyContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: s(5),
    borderRadius: s(30),
    borderWidth: s(1),
    borderColor: AppColors.blueGray,
    width: s(80),
    paddingVertical: vs(5),
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.lightGray,
    padding: s(5),
    width: s(20),
    height: s(20),
    borderRadius: s(10),
  },
  textQty: {
    flex: 1,
    textAlign: "center",
    color: AppColors.primary,
  },
});
