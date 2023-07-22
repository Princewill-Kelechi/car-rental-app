import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import { colors } from "../theme/colors";
import { CustomText } from "../components";

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <CustomText.BodyLarge>Lets get these party started</CustomText.BodyLarge>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: colors.black,
  },
});

export default OnboardingScreen;
