import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { AppColors } from "../../styles/AppColors";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-path";
import { s, vs } from "react-native-size-matters";
import AppButton from "../../components/buttons/AppButton";
import AppText from "../../components/Texts/AppText";
import { useNavigation } from "@react-navigation/native";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";
import { FirebaseError } from "firebase/app";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const SignInScreen = () => {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSignIn = async (formData: FormData) => {
    try {
      if (!formData) throw new Error("Invalid form data");

      const credential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      if (!credential) throw new Error("No user found");

      navigation.navigate("MainAppBottomTabs" as never);
    } catch (error) {
      let errorMessage = "";
      const firebaseError = error as FirebaseError;

      if (firebaseError.code === "auth/user-not-found") {
        errorMessage = "User not found";
      } else if (firebaseError.code === "auth/invalid-credential") {
        errorMessage = "Wrong email or password";
      } else {
        errorMessage = "An error occurred during sign-in";
      }

      showMessage({
        type: "danger",
        message: errorMessage,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInputController
        control={control}
        name="email"
        placeholder="Email"
        keyboardType="email-address"
      />
      <AppTextInputController
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <AppText variant="bold" style={styles.appName}>
        Smart E-Commerce
      </AppText>
      <AppButton title="Login" onPress={handleSubmit(onSignIn)} />
      <AppButton
        title="Sign Up"
        onPress={() => navigation.navigate("SignUpScreen" as never)}
        style={styles.registerButton}
        textColor={AppColors.primary}
      />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.background,
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: s(150),
    width: s(150),
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },
  registerButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
