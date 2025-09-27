import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../../components/Texts/AppText";
import { AppFonts } from "../../styles/fonts";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/AppColors";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EmptyCart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="shopping-outline"
        size={s(100)}
        color={AppColors.primary}
        style={styles.icon}
      />
      <AppText style={styles.title}>Your Cart Is Empty</AppText>
      <AppText style={styles.subTitle}>
        Browse our products and find something you like.
      </AppText>
      <AppButton
        title="Start Shopping"
        onPress={() => navigation.navigate("Home" as never)}
        style={styles.button}
      />
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: s(20),
  },
  title: {
    fontFamily: AppFonts.Bold,
    fontSize: s(20),
    color: AppColors.primary,
    marginBottom: vs(10),
  },
  subTitle: {
    fontFamily: AppFonts.Medium,
    fontSize: s(16),
    color: AppColors.medGray,
    marginBottom: vs(20),
    textAlign: "center",
  },
  button: {
    width: "80%",
  },
  icon: {
    marginBottom: vs(20),
    opacity: 0.9,
  },
});
