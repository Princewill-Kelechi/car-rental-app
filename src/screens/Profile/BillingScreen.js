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
import { visa, visa2 } from "../../constants/images";

const BillingScreen = ({ navigation, route }) => {
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
          <CustomText.Header fontSize={wp(24)}>Billing</CustomText.Header>
        </View>
        <View
          style={{
            marginTop: wp(50),
          }}
        >
          <CustomText.BodyLarge>Payment method</CustomText.BodyLarge>
          <View
            style={{
              marginTop: wp(20),
              width: "100%",
              height: wp(200),
              backgroundColor: colors.veryDarkBlue,
              borderRadius: wp(20),
              paddingHorizontal: wp(20),
              paddingVertical: wp(20),
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  color: colors.white,
                  fontSize: wp(25),
                  fontFamily: "Poppins-SemiBold",
                }}
              >
                **** **** **** 6969
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <CustomText.BodyLarge color={colors.white}>
                  Princewill Kelechi
                </CustomText.BodyLarge>
                <CustomText.BodySmall marginTop={wp(10)} color={colors.white}>
                  09/24
                </CustomText.BodySmall>
              </View>
              <Image
                source={visa2}
                style={{
                  width: wp(60),
                  height: wp(60),
                }}
              />
            </View>
          </View>
          <Button
            backgroundColor={colors.white}
            textColor={colors.veryDarkBlue}
            borderColor={colors.veryDarkBlue}
            borderWidth={wp(0.5)}
            marginTop={wp(30)}
            title={"+ Add payment method"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default BillingScreen;
