import { StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import React, { FC } from "react";
import { AppColors } from "../../styles/AppColors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { IS_Android } from "../../constants/constants";

interface AppSafeViewProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const AppSafeView: FC<AppSafeViewProps> = ({ children, style }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.container, style]}>{children}</View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingTop: IS_Android ? StatusBar.currentHeight || 0 : 0,
  },
  container: {
    flex: 1,
  },
});
