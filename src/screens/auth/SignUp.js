import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Button, CustomText, Header, Input } from "../../components";
import { ArrowBack } from "../../assets/icons";
import { wp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import updateStatusBar from "../../hooks/updateStatusBar";

const SignUp = () => {
  updateStatusBar("light-content", colors.grey);
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Header customStyles={{ marginTop: wp(50) }} showBackIcon={true} />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <CustomText.Header
          fontSize={wp(25)}
          marginTop={wp(30)}
          paddingVertical={wp(10)}
        >
          Let's get to know you!
        </CustomText.Header>
        <CustomText.BodySmall paddingVertical={wp(10)}>
          Fill in your details to create an account.
        </CustomText.BodySmall>

        <View style={styles.signUpContainer}>
          <Input
            marginTop={wp(10)}
            label="Full Name"
            placeholder="Your  full name"
          />
          <Input
            inputContainerStyles={{ marginTop: wp(30) }}
            marginTop={wp(10)}
            label="Email address"
            placeholder="Your email address"
          />
          <Input
            inputContainerStyles={{ marginTop: wp(30) }}
            marginTop={wp(10)}
            label="Password"
            secureTextEntry={true}
            placeholder="Your password"
          />

          <Button marginTop={wp(40)} title={"Sign In"} />
        </View>
        <View style={styles.footer}>
          <CustomText.BodyLarge color={colors.gray3}>
            Already have an account?{" "}
          </CustomText.BodyLarge>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate("SignIn")}
          >
            <CustomText.BodyLarge> Sign In</CustomText.BodyLarge>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  signUpContainer: {
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

export default SignUp;
