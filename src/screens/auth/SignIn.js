import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, CustomText, Header, Input } from "../../components";
import { ArrowBack, EyeClosed, EyeOpen } from "../../assets/icons";
import { wp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import updateStatusBar from "../../hooks/updateStatusBar";

const SignIn = () => {
  updateStatusBar("light-content", colors.grey);
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const ViewPassword = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setSecureTextEntry(!secureTextEntry)}
      >
        {secureTextEntry ? <EyeOpen /> : <EyeClosed />}
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
      <Header customStyles={{ marginTop: wp(24) }} showBackIcon={true} />

      <View style={styles.container}>
        <CustomText.Header
          fontSize={wp(25)}
          marginTop={wp(30)}
          paddingVertical={wp(10)}
        >
          Welcome to Rent a Ride
        </CustomText.Header>
        <CustomText.BodySmall paddingVertical={wp(10)}>
          Enter your sign in details to continue.
        </CustomText.BodySmall>

        <View style={styles.signInContainer}>
          <Input
            marginTop={wp(10)}
            label="Email address"
            placeholder="Your email address"
          />
          <Input
            inputContainerStyles={{ marginTop: wp(50) }}
            marginTop={wp(10)}
            label="Password"
            secureTextEntry={secureTextEntry}
            placeholder="Your password"
            inputWidth="80%"
            rightElement={<ViewPassword />}
          />

          <Button marginTop={wp(40)} title={"Sign In"} />
        </View>
        <View style={styles.footer}>
          <CustomText.BodyLarge color={colors.gray3}>
            Don't have an account?{" "}
          </CustomText.BodyLarge>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate("SignUp")}
          >
            <CustomText.BodyLarge> Register</CustomText.BodyLarge>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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

export default SignIn;
