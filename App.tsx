import { StatusBar } from "expo-status-bar";
import FlashMessage from "react-native-flash-message";
import AuthStack from "./src/navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack";

export default function App() {
  return (
    <NavigationContainer>
      <FlashMessage position="top" />
      <StatusBar style="auto" />
      <MainAppStack />
    </NavigationContainer>
  );
}
