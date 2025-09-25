import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import { AppColors } from "./AppColors";

export const sharedPaddingHorizontal = s(12)
export const commonStyles = StyleSheet.create({
  shadow: {
    // IOS
    shadowColor: AppColors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    }, 
    shadowOpacity: .2,
    shadowRadius: 10,

    // Android
    elevation: 4,
  }
})