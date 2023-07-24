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
          data={discount}
          renderItem={(item) => <CarDiscountCard discountData={item} />}
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
              Top vehicle
            </CustomText.BodyLarge>
            <CustomText.Caption color={colors.gray3}>
              See all
            </CustomText.Caption>
          </View>
          <View style={{ marginTop: wp(30) }}>
            <ScrollView
              snapToInterval={wp(380)}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {listingData.map((item, index) => (
                <CarCard
                  customStyles={{ marginRight: wp(20) }}
                  key={index}
                  listingData={item}
                />
              ))}
            </ScrollView>
          </View>
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
