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

const AddCar = ({ navigation, route }) => {
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
          <CustomText.Header fontSize={wp(24)}>Add Car</CustomText.Header>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AddCar;
