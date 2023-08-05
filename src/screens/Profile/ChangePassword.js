import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Button, CustomText, Header, Input } from "../../components";
import { ArrowBack, EyeClosed, EyeOpen } from "../../assets/icons";
import { wp } from "../../utils/responsive-dimension";
import { colors } from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import updateStatusBar from "../../hooks/updateStatusBar";

const ChangePassword = () => {
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
    <View style={styles.main}>
      <Header customStyles={{ marginTop: wp(50) }} showBackIcon={true} />

      <View style={styles.container}>
        <CustomText.Header fontSize={wp(25)} paddingVertical={wp(10)}>
          Change Password
        </CustomText.Header>

        <View style={styles.signInContainer}>
          <Input
            marginTop={wp(10)}
            label="Old Password"
            secureTextEntry={secureTextEntry}
            placeholder="Old password"
            inputWidth="80%"
            rightElement={<ViewPassword />}
            inputContainerStyles={{ marginBottom: wp(30) }}
          />
          <Input
            marginTop={wp(10)}
            label="New Password"
            secureTextEntry={secureTextEntry}
            placeholder="New password"
            inputWidth="80%"
            rightElement={<ViewPassword />}
          />
          <Input
            inputContainerStyles={{ marginTop: wp(50) }}
            marginTop={wp(10)}
            label="Confirm new password"
            secureTextEntry={secureTextEntry}
            placeholder="Confirm your password"
            inputWidth="80%"
            rightElement={<ViewPassword />}
          />

          <Button marginTop={wp(40)} title={"Change Password"} />
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

export default ChangePassword;
