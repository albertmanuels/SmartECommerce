import { StyleSheet, View } from "react-native";
import React from "react";
import { AppColors } from "../../styles/AppColors";
import AppText from "../Texts/AppText";
import { s, vs } from "react-native-size-matters";
import { AppFonts } from "../../styles/fonts";
import { shippingFees, taxes } from "../../constants/constants";

interface ITotalViewProps {
  itemsPrice: number;
  orderTotal: number;
}

const TotalView = ({ itemsPrice, orderTotal }: ITotalViewProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Items Price:</AppText>
        <AppText style={styles.textPrice}>${itemsPrice}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Taxes & Fees:</AppText>
        <AppText style={styles.textPrice}>${taxes}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Shipping Fees:</AppText>
        <AppText style={styles.textPrice}>${shippingFees}</AppText>
      </View>
      <View style={styles.separator} />
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Order Total:</AppText>
        <AppText style={styles.textPrice}>${orderTotal}</AppText>
      </View>
    </View>
  );
};

export default TotalView;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: AppColors.blueGray,
    paddingVertical: vs(6),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: vs(10),
  },
  textTitle: {
    flex: 1,
    fontSize: s(16),
    fontFamily: AppFonts.Bold,
  },
  textPrice: {
    fontSize: s(16),
    color: AppColors.primary,
  },
  separator: {
    height: 1,
    backgroundColor: AppColors.blueGray,
    marginVertical: vs(5),
  },
});
