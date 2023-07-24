import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import {
  CarCard,
  CarDiscountCard,
  CustomText,
  DotIndicator,
  CustomCarousel,
} from "../../components";
import { hp, wp } from "../../utils/responsive-dimension";
import { ArrowDown, NotificationIcon, SearchIcon } from "../../assets/icons";
import { colors } from "../../theme/colors";
import { discount, listingData } from "../../constants/staticData";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: wp(15),
        }}
      >
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CustomText.Caption customStyles={{ marginRight: wp(3) }}>
              Your location
            </CustomText.Caption>
            <ArrowDown color={colors.veryDarkBlue} size={wp(20)} />
          </View>
          <CustomText.BodyLarge
            customStyles={{ marginTop: wp(5) }}
            fontFamily="Poppins-Bold"
          >
            Lagos, Nigeria
          </CustomText.BodyLarge>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "20%",
            justifyContent: "space-between",
          }}
        >
          <SearchIcon color={colors.veryDarkBlue} size={wp(25)} />
          <NotificationIcon color={colors.veryDarkBlue} size={wp(25)} />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <CustomCarousel
          scrollViewProps={{ snapToInterval: wp(380) }}
          data={discount}
          carouselStyle={{ marginTop: wp(30), marginBottom: wp(10) }}
          renderItem={(item) => (
            <CarDiscountCard
              discountData={item}
              customStyles={{ marginRight: wp(20) }}
            />
          )}
        />

        <View>
          <View
            style={{
              marginTop: wp(30),
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <CustomText.BodyLarge fontFamily="Poppins-Bold">
              Top vehicles
            </CustomText.BodyLarge>
            <CustomText.Caption color={colors.gray3}>
              See all
            </CustomText.Caption>
          </View>
          <CustomCarousel
            data={listingData}
            scrollViewProps={{ snapToInterval: wp(385) }}
            carouselStyle={{ marginTop: wp(30) }}
            renderItem={(item, index) => (
              <CarCard
                key={index}
                listingData={item}
                customStyles={{ marginRight: wp(20), marginLeft: wp(5) }}
              />
            )}
          />
        </View>
        <View>
          <View
            style={{
              marginTop: wp(30),
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <CustomText.BodyLarge fontFamily="Poppins-Bold">
              Available near you
            </CustomText.BodyLarge>
            <CustomText.Caption color={colors.gray3}>
              See all
            </CustomText.Caption>
          </View>
          <CustomCarousel
            data={[...listingData].reverse()}
            scrollViewProps={{ snapToInterval: wp(385) }}
            carouselStyle={{ marginTop: wp(30) }}
            renderItem={(item, index) => (
              <CarCard
                key={index}
                listingData={item}
                customStyles={{ marginRight: wp(20), marginLeft: wp(5) }}
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  safeArea: {
    flex: 1,
    paddingHorizontal: wp(30),
    marginTop: wp(50),
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: wp(60),
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default HomeScreen;
