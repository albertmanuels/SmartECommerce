import { Alert, Image, StyleSheet, View } from "react-native";
import React from "react";
import { AppColors } from "../../styles/AppColors";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-path";
import { s, vs } from "react-native-size-matters";
import AppButton from "../../components/buttons/AppButton";
import AppText from "../../components/Texts/AppText";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";
import { FirebaseError } from "firebase/app";

const schema = yup
  .object({
    username: yup
      .string()
      .required("Username is required")
      .min(5, "Username must be more than 5 characters"),
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

const SignUpScreen = () => {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSignUp = async (formData: FormData) => {
    try {
      if (!formData) throw new Error("Invalid form data");

      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      Alert.alert("User created successfully");
      navigation.navigate("MainAppBottomTabs" as never);
    } catch (error) {
      let errorMessage = "";
      const firebaseError = error as FirebaseError;

      switch (firebaseError.code) {
        case "auth/email-already-in-use":
          errorMessage = "This email is already in use";
          break;
        case "auth/invalid-email":
          errorMessage = "The email address is invalid";
          break;
        case "auth/weak-password":
          errorMessage = "The password is too weak";
          break;
        default:
          errorMessage = "An error occurred during sign-up";
          break;
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
        name="username"
        placeholder="Username"
      />
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
      <AppButton
        title="Create a New Account"
        onPress={handleSubmit(onSignUp)}
      />
      <AppButton
        title="Go to Sign In"
        onPress={() => navigation.navigate("SignInScreen" as never)}
        style={styles.signInButton}
        textColor={AppColors.primary}
      />
    </View>
  );
};

export default SignUpScreen;

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
  signInButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
