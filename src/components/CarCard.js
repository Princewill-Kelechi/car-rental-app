import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import { colors } from "../theme/colors";
import { wp } from "../utils/responsive-dimension";
import { car3, star } from "../constants/images";

const CarCard = ({ listingData, customStyles }) => {
  return (
    <View style={[styles.card, customStyles]}>
      <Image source={listingData?.image} style={styles.carStyles} />
      <View style={{ marginLeft: wp(10) }}>
        <CustomText.BodyLarge marginTop={wp(15)} fontFamily="Poppins-SemiBold">
          {listingData?.name}
        </CustomText.BodyLarge>
        <View
          style={{
            flexDirection: "row",
            width: "45%",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: wp(10),
          }}
        >
          <Image source={star} style={styles.starIcon} />
          <CustomText.BodySmall fontFamily="Poppins-SemiBold">
            {listingData?.rating}
          </CustomText.BodySmall>
          <CustomText.BodySmall color={colors.gray2}>
            ({listingData?.reviewCount} reviews)
          </CustomText.BodySmall>
        </View>
        <CustomText.BodyLarge
          paddingVertical={wp(20)}
          fontFamily="Poppins-SemiBold"
        >
          {listingData?.currency} {listingData?.price}{" "}
          {listingData?.paymentInterval}
        </CustomText.BodyLarge>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: wp(10),
    elevation: wp(5),
    borderRadius: wp(35),
    width: wp(360),
    marginBottom: wp(10),
  },
  carStyles: {
    width: "100%",
    height: wp(250),
    resizeMode: "cover",
    borderRadius: wp(35),
  },
  starIcon: {
    width: wp(20),
    height: wp(20),
    resizeMode: "contain",
  },
});

export default CarCard;
