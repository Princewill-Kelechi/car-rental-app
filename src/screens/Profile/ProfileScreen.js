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
  ProfileIcon,
  SearchIcon,
  ShieldIcon,
  WalletIcon,
} from "../../assets/icons";
import { colors } from "../../theme/colors";
import { discount, listingData } from "../../constants/staticData";
import { globalStyles } from "../../theme/globalStyles";
import { FlatList } from "react-native";
import { shortenText, cleanseNumber, formatNumber } from "../../utils/helpers";
import { profileImg } from "../../constants/images";

const ProfileScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.scrollViewContent}
      >
        <CustomText.Header marginTop={wp(20)} fontSize={wp(24)}>
          Profile
        </CustomText.Header>
        <View
          style={{
            backgroundColor: colors.veryDarkBlue,
            width: "100%",
            height: wp(150),
            marginTop: wp(30),
            borderRadius: wp(25),
            flexDirection: "row",
            paddingHorizontal: wp(20),
            paddingVertical: wp(20),
            alignItems: "center",
          }}
        >
          <Image
            source={profileImg}
            style={{
              width: 80,
              height: 80,
              resizeMode: "cover",
              borderRadius: wp(15),
            }}
          />
          <View
            style={{
              // alignSelf: "flex-start",
              marginLeft: wp(15),
              // marginTop: wp(10),
            }}
          >
            <CustomText.BodyLarge color={colors.white}>
              Princewill Kelechi
            </CustomText.BodyLarge>
            <CustomText.BodySmall marginTop={wp(10)} color={colors.white}>
              Client
            </CustomText.BodySmall>
          </View>
        </View>
        <View
          style={{
            marginTop: wp(50),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfileScreen")}
            style={{
              flexDirection: "row",
              borderBottomWidth: wp(1.5),
              borderColor: colors.gray4,
              paddingBottom: wp(20),
              alignItems: "center",
              marginBottom: wp(30),
            }}
          >
            <View
              style={{
                padding: wp(10),
                width: wp(50),
                height: hp(50),
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1.5,
                borderColor: colors.veryDarkBlue,
                borderRadius: wp(10),
              }}
            >
              <ProfileIcon color={colors.veryDarkBlue} size={24} />
            </View>
            <CustomText.BodyLarge fontSize={wp(18)} marginLeft={wp(20)}>
              Account Profile
            </CustomText.BodyLarge>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderBottomWidth: wp(1.5),
              borderColor: colors.gray4,
              paddingBottom: wp(20),
              alignItems: "center",
              marginBottom: wp(30),
            }}
            onPress={() => navigation.navigate("BillingScreen")}
          >
            <View
              style={{
                padding: wp(10),
                width: wp(50),
                height: hp(50),
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1.5,
                borderColor: colors.veryDarkBlue,
                borderRadius: wp(10),
              }}
            >
              <WalletIcon height={24} width={24} />
            </View>
            <CustomText.BodyLarge fontSize={wp(18)} marginLeft={wp(20)}>
              Billing
            </CustomText.BodyLarge>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderBottomWidth: wp(1.5),
              borderColor: colors.gray4,
              paddingBottom: wp(20),
              alignItems: "center",
              marginBottom: wp(30),
            }}
            onPress={() => navigation.navigate("ChangePassword")}
          >
            <View
              style={{
                padding: wp(10),
                width: wp(50),
                height: hp(50),
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1.5,
                borderColor: colors.veryDarkBlue,
                borderRadius: wp(10),
              }}
            >
              <ShieldIcon height={24} width={24} />
            </View>
            <CustomText.BodyLarge fontSize={wp(18)} marginLeft={wp(20)}>
              Change Password
            </CustomText.BodyLarge>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderBottomWidth: wp(1.5),
              borderColor: colors.gray4,
              paddingBottom: wp(20),
              alignItems: "center",
              marginBottom: wp(30),
            }}
          >
            <View
              style={{
                padding: wp(10),
                width: wp(50),
                height: hp(50),
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1.5,
                borderColor: colors.veryDarkBlue,
                borderRadius: wp(10),
              }}
            >
              <NotificationIcon size={24} color={colors.veryDarkBlue} />
            </View>
            <CustomText.BodyLarge fontSize={wp(18)} marginLeft={wp(20)}>
              Notification
            </CustomText.BodyLarge>
          </TouchableOpacity>
          <Button marginTop={wp(20)} title={"Logout"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
