import { StyleSheet, View } from "react-native";
import React from "react";
import { commonStyles } from "../../styles/sharedStyles";
import { AppColors } from "../../styles/AppColors";
import { s, vs } from "react-native-size-matters";
import { AppFonts } from "../../styles/fonts";
import AppText from "../Texts/AppText";

interface OrderDetailData {
  id: string;
  totalPrice: number;
  totalAmount: number;
  date: string;
}
interface OrderDetailCardProps {
  data: OrderDetailData;
}

const OrderDetailCard = ({ data }: OrderDetailCardProps) => {
  return (
    <View style={styles.orderDetailCard}>
      <AppText style={styles.cardTitle}>ORDER DETAILS</AppText>
      <View style={styles.separator} />
      <View style={styles.orderInfoContainer}>
        <AppText style={styles.orderInfoText}>
          Total Price: ${data.totalPrice}
        </AppText>
        <AppText style={styles.orderInfoSummaryText}>
          {data.totalAmount} $
        </AppText>
      </View>
      <View style={styles.orderInfoContainer}>
        <AppText style={styles.orderInfoText}>Date: {data.date}</AppText>
        <AppText style={styles.orderInfoSummaryText}>{data.date}</AppText>
      </View>
    </View>
  );
};

export default OrderDetailCard;

const styles = StyleSheet.create({
  orderDetailCard: {
    ...commonStyles.shadow,
    width: "100%",
    backgroundColor: AppColors.white,
    padding: s(12),
    paddingVertical: vs(15),
    borderRadius: s(10),
  },
  separator: {
    width: "100%",
    height: s(2),
    backgroundColor: AppColors.black,
    marginBottom: vs(10),
  },
  orderInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: AppFonts.Bold,
  },
  cardTitle: {
    fontSize: s(16),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginBottom: vs(8),
  },
  orderInfoText: {
    fontSize: s(16),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
  },
  orderInfoSummaryText: {
    fontSize: s(16),
    fontFamily: AppFonts.Bold,
    color: AppColors.redColor,
  },
});
