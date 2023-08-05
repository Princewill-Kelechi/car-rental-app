import React, { useState } from "react";
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
// import * as Clipboard from "expo-clipboard";
// import { Clipboard } from "@react-native-clipboard/clipboard";
// import {useClipboard} from '@react-native-community/clipboard';
import { Button, CustomText, Header } from "../../components";
import { globalStyles } from "../../theme/globalStyles";
import { car1 } from "../../constants/images";
import { colors } from "../../theme/colors";
import { ArrowBack } from "../../assets/icons";
import { wp } from "../../utils/responsive-dimension";
import { useNavigation } from "@react-navigation/native";

export default PromoScreen = ({ route }) => {
  const navigation = useNavigation();

  const { promoItem } = route.params;
  console.log(promoItem);

  const [text, setText] = useState("Copy");

  const handleCopy = (text) => {
    console.log(text);
    Clipboard.setString(text);
    setText("Copied");
    setTimeout(() => {
      setText("Copy");
    }, 4000);
  };

  return (
    <SafeAreaView style={[globalStyles.safeArea, styles.main]}>
      <ScrollView contentContainerStyle={[globalStyles.scrollViewContent]}>
        <View style={{ height: "40%" }}>
          <ImageBackground
            source={promoItem?.carImage}
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
        </View>
        <View style={{ paddingHorizontal: wp(20) }}>
          <CustomText.Header marginTop={wp(40)}>
            {promoItem?.title}
          </CustomText.Header>
          <View style={styles.codeContainer}>
            <View style={{ justifyContent: "space-between" }}>
              <CustomText.BodySmall>Promo Code</CustomText.BodySmall>
              <CustomText.BodyLarge fontSize={wp(20)} fontFamily="Poppins-Bold">
                {promoItem?.code}
              </CustomText.BodyLarge>
            </View>
            <Button onPress={() => handleCopy(promoItem?.code)} title={text} />
          </View>
          <View style={{ marginTop: wp(20) }}>
            <CustomText.BodyLarge>
              {promoItem?.description}
            </CustomText.BodyLarge>
            <CustomText.BodyLarge
              marginTop={wp(35)}
              fontSize={wp(20)}
              fontFamily="Poppins-Bold"
            >
              Terms and Conditions
            </CustomText.BodyLarge>
            <CustomText.BodyLarge marginTop={wp(15)}>
              - Minimum rent of ₦ 15,000
            </CustomText.BodyLarge>
            <CustomText.BodyLarge marginTop={wp(15)}>
              - All rent processes only accepted in Lagos or Abuja
            </CustomText.BodyLarge>
            <CustomText.BodyLarge marginTop={wp(15)}>
              - Only accepts for credit card payment
            </CustomText.BodyLarge>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 0,
  },
  container: {},
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp(20),
    paddingVertical: wp(10),
    marginTop: wp(20),
    borderWidth: wp(1),
    borderColor: colors.gray4,
    borderRadius: wp(15),
  },
});
