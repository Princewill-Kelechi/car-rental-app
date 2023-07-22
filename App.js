import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { OnboardingScreen } from "./src/screens";
import { useFonts } from "expo-font";
import customFonts from "./src/theme/fonts";

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) {
    console.log("fonts not loaded");
  } else console.log("fonts loaded ");

  return (
    <SafeAreaProvider>
      <OnboardingScreen />
    </SafeAreaProvider>
  );
}
