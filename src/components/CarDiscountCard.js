import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import { hp, wp } from "../utils/responsive-dimension";

const CarDiscountCard = ({ discountData, customStyles, onPress }) => {
  const style = StyleSheet.create({
    homeImage: {
      width: wp(360),
      height: hp(280),
      resizeMode: "cover",
      borderRadius: wp(15),
      paddingVertical: wp(20),
      // borderWidth: wp(1),
      // borderColor: colors.veryDarkBlue,
    },
  });
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={customStyles}
    >
      <Image style={style.homeImage} source={discountData?.carImage} />
      <CustomText.BodyLarge marginTop={wp(15)} fontFamily="Poppins-Bold">
        {discountData?.title}
      </CustomText.BodyLarge>
    </TouchableOpacity>
  );
};

export default CarDiscountCard;
