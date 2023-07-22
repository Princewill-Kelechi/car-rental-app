import React from "react";
import { SafeAreaView, View, StyleSheet, Text, Image } from "react-native";
import { colors } from "../theme/colors";
import { CustomText } from "../components";
import { onboardingimage } from "../constants/images";
import { hp, wp } from "../utils/responsive-dimension";
import Button from "../components/Button";

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Image style={styles.onboardingimage} source={onboardingimage} />
        <CustomText.Header marginTop={hp(30)}>
          Drive in style anywhere,
        </CustomText.Header>
        <CustomText.Header>anytime.</CustomText.Header>
        <CustomText.BodySmall
          fontSize={wp(15)}
          color={colors.gray2}
          marginTop={wp(20)}
        >
          Choose from hundreds of models, you won't find anywhere else, pick it
          up or get it delivered where you want it.
        </CustomText.BodySmall>
        <Button marginTop={wp(80)} title={"Log In"} />
        <Button
          backgroundColor={colors.white}
          textColor={colors.verydarkblue}
          borderColor={colors.verydarkblue}
          borderWidth={wp(2)}
          marginTop={wp(10)}
          title={"Sign Up"}
        />
      </View>
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
    paddingHorizontal: wp(20),
    width: "100%",
  },
  container: {},
  onboardingimage: {
    width: wp(380),
    height: hp(400),
    resizeMode: "cover",
    borderRadius: wp(20),
  },
});

export default OnboardingScreen;
