import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  ViewStyle,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../Texts/AppText";
import { AppColors } from "../../styles/AppColors";

interface AppButtonProps {
  onPress: TouchableWithoutFeedbackProps["onPress"];
  title: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle | ViewStyle[];
  styleTitle?: TextStyle | TextStyle[];
  disabled?: boolean;
}

const AppButton = ({
  onPress,
  title,
  backgroundColor = AppColors.primary,
  textColor = AppColors.white,
  style,
  styleTitle,
  disabled,
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.button,
        {
          backgroundColor: disabled ? AppColors.disabledGray : backgroundColor,
        },
        style,
      ]}
      disabled={disabled}
    >
      <AppText
        variant="bold"
        style={[
          styles.textTitle,
          { color: textColor },
          styleTitle as unknown as TextStyle,
        ]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: vs(40),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(25),
    alignSelf: "center",
  },
  textTitle: {
    fontSize: s(16),
  },
});
