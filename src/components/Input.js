import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import CustomText from "./CustomText";
import { hp, wp } from "../utils/responsive-dimension";
import { colors } from "../theme/colors";

const Input = ({
  label,
  secureTextEntry = false,
  marginTop,
  placeholder = "Enter text",
  onChangeText,
  inputFocused,
  inputBlur,
  value,
  error,
  autoFocus,
  textAlign = "left",
  paddingVertical = hp(18),
  paddingHorizontal = wp(16),
  width = "100%",
  inputWidth = "100%",
  leftElement,
  rightElement,
  inputContainerStyles,
  inputStyles,
  editable = true,
  greyOutUneditableInput = true,
  placeholderTextColor = colors.gray3,

  ...rest
}) => {
  const styles = {
    inputContainer: {
      marginTop: marginTop,
      borderRadius: wp(16),
      backgroundColor:
        !editable && greyOutUneditableInput ? colors.grey : colors.white,
      paddingVertical,
      paddingHorizontal,
      width,
      borderColor: error ? "#D0040480" : "#E0E0E0",
      borderWidth: wp(1),
      flexDirection: "row",
      justifyContent: "space-between",
    },
    textInput: {
      flex: 1,
      fontFamily: "Poppins-Regular",
      color: colors.black,
      fontSize: wp(14),
      lineHeight: hp(20),
      //   marginTop: showLabel || value ? hp(4) : 0,
      // marginHorizontal: leftElement || rightElement ? hp(12) : 0,
      marginLeft: leftElement ? hp(12) : 0,
      marginRight: rightElement ? hp(12) : 0,
      paddingVertical: 0,
      textAlign,
      // width: "80%",
    },
    errorInput: {
      borderWidth: 1,
      // borderColor: colors.red,
    },
    errorText: {
      marginTop: 10,
      fontWeight: "500",
    },
  };

  return (
    <View style={inputContainerStyles}>
      {label && (
        <CustomText.BodyLarge fontFamily="Poppins-Bold" fontSize={wp(18)}>
          {label}
        </CustomText.BodyLarge>
      )}
      <View style={[styles.inputContainer, inputStyles]}>
        <TextInput
          style={{ fontFamily: "Poppins-Regular", width: inputWidth }}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onBlur={inputBlur}
          onChangeText={onChangeText}
          onFocus={inputFocused}
          secureTextEntry={secureTextEntry}
          {...rest}
        />
        <View>{rightElement}</View>
      </View>
      {error && (
        <CustomText.Caption marginTop={hp(8)}>{error}</CustomText.Caption>
      )}
    </View>
  );
};

export default Input;
