import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Button, CarCard, CustomText, Header, Input } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { hp, wp } from "../../utils/responsive-dimension";
import {
  ArrowDown,
  ArrowRight,
  NotificationIcon,
  SearchIcon,
} from "../../assets/icons";
import { colors } from "../../theme/colors";
import { discount, listingData } from "../../constants/staticData";
import { globalStyles } from "../../theme/globalStyles";
import { FlatList } from "react-native";
import { shortenText, cleanseNumber, formatNumber } from "../../utils/helpers";

const ProtectionPlanScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Header
            customStyles={{
              marginHorizontal: 0,
            }}
            showBackIcon={true}
          />
          <CustomText.Header fontSize={wp(24)}>
            Protection plans
          </CustomText.Header>
        </View>
        <PlanItem />
        <PlanItem2 />
      </ScrollView>
    </SafeAreaView>
  );
};

const PlanItem = () => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        width: "100%",
        height: hp(300),
        borderRadius: wp(20),
        marginTop: wp(20),
        borderWidth: wp(1),
        borderColor: colors.veryDarkBlue,
        padding: wp(20),
        flexDirection: "row",
        // alignItems : "center"
      }}
    >
      <View
        style={{
          width: wp(30),
          height: hp(30),
          borderRadius: wp(25),
          borderColor: colors.veryDarkBlue,
          borderWidth: wp(2),
          marginRight: wp(20),
          
        }}
      ></View>
      <View style={{ width: "85%" }}>
        <CustomText.BodyLarge fontFamily="Poppins-Bold">
          Standard : $ 20
        </CustomText.BodyLarge>
        <CustomText.BodyLarge marginTop={wp(15)}>
          Dependable - hit the road confidently with solid protection
        </CustomText.BodyLarge>
        <CustomText.BodySmall marginTop={wp(10)}>
          - Protection against thiefs
        </CustomText.BodySmall>
        <CustomText.BodySmall marginTop={wp(10)}>
          - Physical damage cost covered up to the cost of the car
        </CustomText.BodySmall>
      </View>
    </View>
  );
};

const PlanItem2 = () => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        width: "100%",
        height: hp(300),
        borderRadius: wp(20),
        marginTop: wp(20),
        borderWidth: wp(1),
        borderColor: colors.gray5,
        padding: wp(20),
        flexDirection: "row",
        // alignItems : "center"
        // elevation: 10,
        // margin : 10,
      }}
    >
      <View
        style={{
          width: wp(30),
          height: hp(30),
          borderRadius: wp(25),
          borderColor: colors.gray5,
          borderWidth: wp(2),
          marginRight: wp(20),
        }}
      ></View>
      <View style={{ width: "85%" }}>
        <CustomText.BodyLarge fontFamily="Poppins-Bold">
          Standard : $ 10
        </CustomText.BodyLarge>
        <CustomText.BodyLarge marginTop={wp(15)}>
          Cost effectively- stay covered while pinching some stuffs
        </CustomText.BodyLarge>
        <CustomText.BodySmall marginTop={wp(10)}>
          - State minimum liability insurance
        </CustomText.BodySmall>
        <CustomText.BodySmall marginTop={wp(10)}>
          - $500 max out-off-pocket for vehicle damage
        </CustomText.BodySmall>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProtectionPlanScreen;
