import React from "react";
import BaseText from "./BaseText";
import { wp } from "../utils/responsive-dimension";

const Header = ({ children, ...rest }) => {
  return (
    <BaseText
      fontFamily="Poppins-Bold"
      fontSize={wp(20)}
      lineHeight={wp(27)}
      letterSpacing={wp(0.15)}
      {...rest}
    >
      {children}
    </BaseText>
  );
};

const BodyLarge = ({ children, ...rest }) => {
  return (
    <BaseText
      fontSize={wp(16)}
      lineHeight={wp(22)}
      letterSpacing={wp(0.5)}
      {...rest}
    >
      {children}
    </BaseText>
  );
};

const BodySmall = ({ children, ...rest }) => {
  return (
    <BaseText
      fontSize={wp(14)}
      lineHeight={wp(20)}
      letterSpacing={wp(0.25)}
      {...rest}
    >
      {children}
    </BaseText>
  );
};

const Caption = ({ children, ...rest }) => {
  return (
    <BaseText
      fontSize={wp(12)}
      lineHeight={wp(16)}
      letterSpacing={wp(0.4)}
      {...rest}
    >
      {children}
    </BaseText>
  );
};

const HelperText = ({ children, ...rest }) => {
  return (
    <BaseText
      fontSize={wp(10)}
      lineHeight={wp(13)}
      letterSpacing={wp(0.4)}
      {...rest}
    >
      {children}
    </BaseText>
  );
};

const CustomText = {
  Header,
  BodyLarge,
  BodySmall,
  Caption,
  HelperText,
};

export default CustomText;
