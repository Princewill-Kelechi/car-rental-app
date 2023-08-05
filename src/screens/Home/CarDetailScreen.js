import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  View,
  TouchableOpacity,
  Clipboard,
} from "react-native";
import { Button, CustomText, DotIndicator, Header } from "../../components";
import { globalStyles } from "../../theme/globalStyles";
import { car1 } from "../../constants/images";
import { colors } from "../../theme/colors";
import { ArrowBack } from "../../assets/icons";
import { wp } from "../../utils/responsive-dimension";
import { useNavigation } from "@react-navigation/native";
import { shortenText } from "../../utils/helpers";

export default CarDetailScreen = ({ route }) => {
  const navigation = useNavigation();

  const { carItem } = route.params;
  const [text, setText] = useState("Copy");

  return (
    <SafeAreaView style={[globalStyles.safeArea, styles.main]}>
      <ScrollView contentContainerStyle={[globalStyles.scrollViewContent]}>
        <ImageSlider carItem={carItem} />
        <View style={{ paddingHorizontal: wp(25), paddingVertical: wp(20) }}>
          <View>
            <CustomText.Header marginTop={wp(40)}>
              {carItem?.name}
            </CustomText.Header>
            <CustomText.BodyLarge marginTop={wp(20)}>
              Model 3 comes with the option of dual motor all wheel drive, 20
              degree Uber turbine wheels and performance Brakes and lowered
              suspension for total control
            </CustomText.BodyLarge>
          </View>
          <View style={{ marginTop: wp(20) }}>
            <CustomText.BodyLarge
              marginBottom={wp(10)}
              fontFamily="Poppins-Bold"
            >
              Car Detail
            </CustomText.BodyLarge>
            <View style={styles.detailContainer}>
              <CustomText.BodyLarge>Fuel</CustomText.BodyLarge>
              <CustomText.BodyLarge fontFamily="Poppins-SemiBold">
                Gasoline
              </CustomText.BodyLarge>
            </View>
            <View style={styles.detailContainer}>
              <CustomText.BodyLarge>Interior Color</CustomText.BodyLarge>
              <CustomText.BodyLarge fontFamily="Poppins-SemiBold">
                Black
              </CustomText.BodyLarge>
            </View>
            <View style={styles.detailContainer}>
              <CustomText.BodyLarge>Kilometers</CustomText.BodyLarge>
              <CustomText.BodyLarge fontFamily="Poppins-SemiBold">
                12.412 Km
              </CustomText.BodyLarge>
            </View>
            <View style={styles.detailContainer}>
              <CustomText.BodyLarge>Seats</CustomText.BodyLarge>
              <CustomText.BodyLarge fontFamily="Poppins-SemiBold">
                4
              </CustomText.BodyLarge>
            </View>
            <View style={styles.detailContainer}>
              <CustomText.BodyLarge>Transmission</CustomText.BodyLarge>
              <CustomText.BodyLarge fontFamily="Poppins-SemiBold">
                6-speed automatic
              </CustomText.BodyLarge>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: wp(30),
          marginVertical: wp(20),
          justifyContent: "space-between",
          backgroundColor: colors.white,
        }}
      >
        <View>
          <CustomText.BodyLarge fontFamily="Poppins-SemiBold">
            {shortenText(carItem?.name, 25)}
          </CustomText.BodyLarge>
          <CustomText.BodySmall marginTop={wp(10)}>
            {carItem?.currency} {carItem?.price} / {carItem?.paymentInterval}
          </CustomText.BodySmall>
        </View>
        <Button
          onPress={() => navigation.navigate("CheckoutScreen", { carItem })}
          title={"Rent Car"}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 0,
    backgroundColor: colors.white,
  },
  container: {},
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: wp(10),
  },
});

const ImageSlider = ({ carItem }) => {
  const navigation = useNavigation();
  const imageArray = [carItem?.image, carItem?.image2, carItem?.image3];
  const [imageIndex, setimageIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setimageIndex(imageIndex + 1 === imageArray.length ? 0 : imageIndex + 1);
    }, 4000);
  }, [imageIndex]);
  return (
    <View style={{ height: wp(300) }}>
      <ImageBackground
        source={imageArray[imageIndex]}
        style={{
          flex: 1,
          resizeMode: "cover",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            paddingHorizontal: wp(20),
            paddingVertical: wp(20),
          }}
        >
          <ArrowBack width={wp(40)} height={wp(40)} fill={colors.white} />
        </TouchableOpacity>
      </ImageBackground>
      <DotIndicator
        customStyles={{ alignSelf: "center", marginTop: wp(-40) }}
        itemCount={imageArray.length}
        activeIndex={imageIndex}
        inactiveColor={colors.white}
      />
    </View>
  );
};
