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
import { colors } from "../../theme/colors";
import { profileData } from "../../constants/staticData";
import { globalStyles } from "../../theme/globalStyles";
import { profileImg } from "../../constants/images";

const EditProfileSceen = ({ navigation, route }) => {
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
            Account Profile
          </CustomText.Header>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: wp(30),
          }}
        >
          <Image
            source={profileData.profileImg}
            style={{
              width: wp(100),
              height: wp(100),
              borderRadius: wp(10),
            }}
          />
          <CustomText.BodyLarge
            marginTop={wp(10)}
            fontFamily="Poppins-SemiBold"
          >
            Change profile picture
          </CustomText.BodyLarge>
        </TouchableOpacity>
        <View style={{ marginTop: wp(50) }}>
          <Input
            marginTop={wp(10)}
            label={"Full name"}
            placeholder="Enter full name"
            value={profileData.name}
          />
          <Input
            inputContainerStyles={{ marginTop: wp(20) }}
            marginTop={wp(10)}
            label={"Email address"}
            placeholder="Enter email"
            value={profileData.email}
          />
          <Input
            inputContainerStyles={{ marginTop: wp(20) }}
            marginTop={wp(10)}
            label={"Gender"}
            placeholder="Enter gender"
            value={profileData.gender}
          />
          <Button marginTop={wp(50)} title={"Update profile"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default EditProfileSceen;
