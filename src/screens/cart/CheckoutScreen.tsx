import { StyleSheet, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import {
  commonStyles,
  sharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import { AppColors } from "../../styles/AppColors";
import { s, vs } from "react-native-size-matters";
import AppButton from "../../components/buttons/AppButton";
import { IS_Android, IS_IOS } from "../../constants/constants";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Phone number must be at least 10 digits"),
    detailedAddress: yup
      .string()
      .required("Detailed Address is required")
      .min(15, "Please provide a detailed address with at least 15 characters"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const CheckoutScreen = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const saveOrder = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <AppSafeView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <View style={styles.inputsContainer}>
          <AppTextInputController
            name="fullName"
            control={control}
            placeholder="Full Name"
          />
          <AppTextInputController
            name="phoneNumber"
            control={control}
            placeholder="Phone Number"
          />
          <AppTextInputController
            name="detailedAddress"
            control={control}
            placeholder="Detailed Address"
          />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <AppButton title="Confirm" onPress={handleSubmit(saveOrder)} />
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
