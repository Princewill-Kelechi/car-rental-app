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

const CheckoutScreen = ({ navigation, route }) => {
  const { carItem } = route.params;
  const [duration, setDuration] = useState(5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const carPrice = cleanseNumber(carItem?.price) * duration;
    const total = carPrice + 1000 + 200;
    setTotal(total);
  }, [duration]);

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
          <CustomText.Header fontSize={wp(24)}>Checkout</CustomText.Header>
        </View>
        <View
          style={{
            marginTop: wp(30),
          }}
        >
          <CustomText.BodySmall fontFamily="Poppins-SemiBold">
            CAR DETAIL
          </CustomText.BodySmall>
          <View
            style={{
              marginTop: wp(10),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <CustomText.BodyLarge fontFamily="Poppins-SemiBold">
                {shortenText(carItem?.name, 20)}
              </CustomText.BodyLarge>
              <CustomText.BodySmall marginTop={wp(10)}>
                {carItem?.currency} {carItem?.price} /{" "}
                {carItem?.paymentInterval}
              </CustomText.BodySmall>
              <CustomText.BodySmall
                color={colors.veryDarkBlue}
                fontSize={wp(18)}
                marginTop={wp(10)}
              >
                {carItem?.address}
              </CustomText.BodySmall>
            </View>
            <Image
              source={carItem?.image}
              style={{
                width: wp(100),
                height: hp(100),
                borderRadius: wp(20),
              }}
            />
          </View>
        </View>
        <View>
          <CustomText.BodySmall
            fontFamily="Poppins-SemiBold"
            marginTop={wp(50)}
          >
            RENTER INFORMATION
          </CustomText.BodySmall>
          <View
            style={{
              marginTop: wp(20),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CustomText.BodySmall>Full name</CustomText.BodySmall>
            <CustomText.BodyLarge fontFamily="Poppins-Bold">
              Princewill Kelechi
            </CustomText.BodyLarge>
          </View>
          <View
            style={{
              marginTop: wp(20),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CustomText.BodySmall>Address line</CustomText.BodySmall>
            <CustomText.BodyLarge fontFamily="Poppins-Bold">
              76, Joel arobiewe str,
            </CustomText.BodyLarge>
          </View>
          <View
            style={{
              marginTop: wp(20),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CustomText.BodySmall>Email Address</CustomText.BodySmall>
            <CustomText.BodyLarge fontFamily="Poppins-Bold">
              {shortenText("princewillkelechi02020@gmail", 25)}
            </CustomText.BodyLarge>
          </View>
          <View>
            <CustomText.BodySmall
              fontFamily="Poppins-SemiBold"
              marginTop={wp(50)}
            >
              ADDITIONAL
            </CustomText.BodySmall>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProtectionPlanScreen")}
              style={{
                marginTop: wp(25),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                //   padding: wp(10),
              }}
            >
              <View>
                <CustomText.BodyLarge fontFamily="Poppins-SemiBold">
                  Protection Plans
                </CustomText.BodyLarge>
                <CustomText.BodySmall marginTop={wp(10)}>
                  To protect you if accident happens
                </CustomText.BodySmall>
              </View>
              <ArrowRight />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <CustomText.BodySmall
            fontFamily="Poppins-SemiBold"
            marginTop={wp(50)}
          >
            SELECT DURATION ({carItem?.paymentInterval})
          </CustomText.BodySmall>
          <View
            style={{
              marginTop: wp(20),
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              customStyles={{ fontSize: wp(20) }}
              onPress={() => setDuration(duration - 1)}
              title={"-"}
            />
            <TextInput
              style={{
                borderWidth: wp(1),
                borderColor: colors.gray5,
                width: "50%",
                borderRadius: wp(10),
                padding: wp(10),
                textAlign: "center",
              }}
              onChangeText={(text) => setDuration(Number(text))}
              value={duration.toString()}
              keyboardType="numeric"
            />
            <Button
              onPress={() => setDuration(duration + 1)}
              customStyles={{ fontSize: wp(20) }}
              title={"+"}
            />
          </View>
          <View
            style={{
              marginBottom: wp(50),
            }}
          >
            <CustomText.BodySmall
              fontFamily="Poppins-SemiBold"
              marginTop={wp(50)}
            >
              PRICE DETAILS
            </CustomText.BodySmall>
            <View
              style={{
                marginTop: wp(20),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CustomText.BodySmall>Trip price</CustomText.BodySmall>
              <CustomText.BodyLarge fontFamily="Poppins-SemiBold">
                {carItem?.currency}{" "}
                {formatNumber(cleanseNumber(carItem?.price) * duration)}
              </CustomText.BodyLarge>
            </View>
            <View
              style={{
                marginTop: wp(20),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CustomText.BodySmall>Delivery price</CustomText.BodySmall>
              <CustomText.BodyLarge fontFamily="Poppins-SemiBold">
                {carItem?.currency} 1,000
              </CustomText.BodyLarge>
            </View>
            <View
              style={{
                marginTop: wp(20),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CustomText.BodySmall>VAT</CustomText.BodySmall>
              <CustomText.BodyLarge fontFamily="Poppins-SemiBold">
                {carItem?.currency} 200
              </CustomText.BodyLarge>
            </View>
            <View
              style={{
                marginTop: wp(20),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CustomText.BodySmall fontFamily="Poppins-Bold">
                Total
              </CustomText.BodySmall>
              <CustomText.BodyLarge fontFamily="Poppins-SemiBold">
                {carItem?.currency} {formatNumber(total)}
              </CustomText.BodyLarge>
            </View>
            <Button title="Payment" marginTop={wp(20)} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default CheckoutScreen;
