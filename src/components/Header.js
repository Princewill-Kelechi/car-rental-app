import React from "react";
import { View } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../theme/colors";
import { ArrowBack } from "../assets/icons";
import { wp } from "../utils/responsive-dimension";
import { useNavigation } from "@react-navigation/native";

const Header = ({
  title,
  textColor = colors.veryDarkBlue,
  showBackIcon,
  onPressLeftElement,
  onPressRightElement,
  rightElement,
  leftElement,
  titleAlign,
  titleStyle,
  customStyles={},
}) => {
  const navigation = useNavigation();

  const Space = () => {
    return <View style={{ width: wp(20) }} />;
  };

  const BackButton = () => {
    return (
      <View style={{ width: wp(50), height: wp(50) }}>
        <ArrowBack width={wp(40)} height={wp(40)} />
      </View>
    );
  };
  return (
    <View style={[styles.main, customStyles]}>
      <TouchableOpacity
        onPress={
          onPressLeftElement ? onPressLeftElement : () => navigation.goBack()
        }
        activeOpacity={0.6}
      >
        {!leftElement && showBackIcon && <BackButton fill={textColor} />}
      </TouchableOpacity>
      {title && (
        <View>
          <CustomText.Header
            textAlign={titleAlign}
            customStyles={titleStyle}
            color={textColor}
          >
            {title}
          </CustomText.Header>
        </View>
      )}
      <TouchableOpacity onPress={onPressRightElement}>
        {rightElement}
      </TouchableOpacity>
      {!rightElement && showBackIcon && <Space />}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: wp(20),
    marginVertical: wp(8),
    marginTop: wp(16),
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: wp(8),
  },
});

export default Header;
