import { StyleSheet, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProfileSectionButton from "./ProfileSectionButton";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import AppText from "../../components/Texts/AppText";
import { s, vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <AppSafeView>
      <HomeHeader />
      <AppText style={{ fontSize: s(18), marginTop: vs(10) }}>
        Hello, Albert!
      </AppText>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <ProfileSectionButton
          onPress={() => navigation.navigate("MyOrdersScreen" as never)}
          title="My Orders"
        />
        <ProfileSectionButton onPress={() => {}} title="Language" />
        <ProfileSectionButton onPress={() => {}} title="Logout" />
      </View>
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
