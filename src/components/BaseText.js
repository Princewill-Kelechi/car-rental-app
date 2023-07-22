import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

const BaseText = ({
  value,
  children,
  lineHeight = hp(24),
  fontSize = wp(16),
  fontFamily = 'Poppins-Medium',
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  letterSpacing,
  customStyles = {},
  textAlign = "left",
  color = colors.black,
  ...rest
}) => {
  const styles = {
    main : {
      fontSize,
      fontFamily,
      marginTop,
      lineHeight,
      marginBottom,
      marginLeft,
      marginRight,
      letterSpacing,
      textAlign,
      color,
    }
  };

  return (
    <Text style={[styles.main, customStyles]} {...rest}>
      {value}
      {children}
    </Text>
  );
};

export default BaseText;
