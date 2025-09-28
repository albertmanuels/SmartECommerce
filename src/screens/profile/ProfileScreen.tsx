import { StyleSheet, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProfileSectionButton from "./ProfileSectionButton";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import AppText from "../../components/Texts/AppText";
import { AppFonts } from "../../styles/fonts";
import { s, vs } from "react-native-size-matters";

const ProfileScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <AppText style={{ fontSize: s(18), marginTop: vs(10) }}>
        Hello, Albert!
      </AppText>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <ProfileSectionButton onPress={() => {}} title="My Orders" />
        <ProfileSectionButton onPress={() => {}} title="Language" />
        <ProfileSectionButton onPress={() => {}} title="Logout" />
      </View>
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
