import React from "react";
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Text,
} from "react-native";
import { hp, wp } from "../utils/responsive-dimension";
import { colors } from "../theme/colors";
// import CustomText from "./CustomText";

const Button = ({
  onPress,
  title,
  width,
  backgroundColor = colors.verydarkblue,
  textColor = colors.white,
  disabled,
  marginTop,
  marginHorizontal,
  loading,
  customStyles,
  borderWidth,
  borderColor,
  paddingVertical = hp(18),
  paddingHorizontal = hp(32),
}) => {
  const styles = StyleSheet.create({
    btnMain: {
      backgroundColor,
      paddingVertical,
      paddingHorizontal,
      borderRadius: wp(16),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width,
      marginTop,
      marginHorizontal,
      borderWidth,
      borderColor,
      opacity: loading || disabled ? 0.7 : 1,
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconContainer: {
      width: wp(24),
    },
    btnText: {
      color: textColor,
      fontFamily: "Poppins-Medium",
      textAlign: "center",
    },
  });
  return (
    <TouchableOpacity
      disabled={loading ? true : false}
      activeOpacity={0.6}
      style={[styles.btnMain, customStyles]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} size="small" />
      ) : (
        <Text style={styles.btnText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
