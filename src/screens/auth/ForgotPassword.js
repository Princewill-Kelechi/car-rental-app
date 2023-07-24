import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Button, CustomText, Header, Input } from "../../components";
import { ArrowBack, EyeClosed, EyeOpen } from "../../assets/icons";
import { wp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import updateStatusBar from "../../hooks/updateStatusBar";

const ForgotPassword = () => {
  updateStatusBar("light-content", colors.grey);
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Header customStyles={{ marginTop: wp(24) }} showBackIcon={true} />

      <View style={styles.container}>
        <CustomText.Header
          fontSize={wp(25)}
          marginTop={wp(30)}
          paddingVertical={wp(10)}
        >
          Forgot Password ?
        </CustomText.Header>
        <CustomText.BodySmall paddingVertical={wp(10)}>
          Pls input your email address to recover your password.
        </CustomText.BodySmall>

        <View style={styles.signInContainer}>
          <Input
            marginTop={wp(10)}
            label="Email address"
            placeholder="Your email address"
          />

          <Button marginTop={wp(40)} title={"Recover account"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: "flex",
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(30),
  },
  signInContainer: {
    marginTop: wp(50),
  },
  inputContainer: {
    height: wp(70),
    borderWidth: wp(1),
    borderColor: colors.gray3,
    borderRadius: wp(15),
    paddingHorizontal: wp(15),
    marginTop: wp(15),
  },
  footer: {
    flexDirection: "row",
    marginTop: wp(60),
    alignSelf: "center",
  },
});

export default ForgotPassword;
