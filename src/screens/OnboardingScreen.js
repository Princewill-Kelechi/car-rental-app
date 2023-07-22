import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import { colors } from "../theme/colors";

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Text>Let's Get These party started</Text>
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
