import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../views/AppSafeView";
import {
  commonStyles,
  sharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import { AppColors } from "../../styles/AppColors";
import { s, vs } from "react-native-size-matters";
import AppTextInput from "../inputs/AppTextInput";
import AppButton from "../buttons/AppButton";
import { IS_Android, IS_IOS } from "../../constants/constants";

const CheckoutScreen = () => {
  return (
    <AppSafeView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <View style={styles.inputsContainer}>
          <AppTextInput
            placeholder="Full Name"
            onChangeText={() => {}}
            value=""
          />
          <AppTextInput
            placeholder="Phone Number"
            onChangeText={() => {}}
            value=""
          />
          <AppTextInput
            placeholder="Detail Address"
            onChangeText={() => {}}
            value=""
          />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <AppButton title="Confirm" onPress={() => {}} />
      </View>
    </AppSafeView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  inputsContainer: {
    ...commonStyles.shadow,
    backgroundColor: AppColors.white,
    padding: s(8),
    borderRadius: s(8),
    marginTop: IS_IOS ? vs(15) : undefined,
    paddingTop: vs(15),
  },
  bottomButtonContainer: {
    paddingHorizontal: sharedPaddingHorizontal,
    width: "100%",
    position: "absolute",
    bottom: IS_Android ? vs(15) : 0,
    borderTopWidth: 1,
    borderColor: AppColors.lightGray,
    paddingTop: vs(10),
  },
});
