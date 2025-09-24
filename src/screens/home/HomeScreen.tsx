import { StyleSheet, Text } from "react-native";
import React from "react";
import AppSafeView from "../../components/views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import { AppFonts } from "../../styles/fonts";

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <Text style={{ fontSize: 60 }}>HomeScreen</Text>
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
