import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navegation/AppNavigator";

export default function App() {
  return <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
};