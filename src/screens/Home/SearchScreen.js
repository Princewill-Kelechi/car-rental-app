import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { CarCard, Header, Input } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { hp, wp } from "../../utils/responsive-dimension";
import { ArrowDown, NotificationIcon, SearchIcon } from "../../assets/icons";
import { colors } from "../../theme/colors";
import { discount, listingData } from "../../constants/staticData";
import { globalStyles } from "../../theme/globalStyles";
import { FlatList } from "react-native";

const SearchScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(listingData);

  const searchObjects = (dataArray, searchString) => {
    if (!dataArray || !searchString) return [];

    const searchResults = dataArray.filter((obj) => {
      if (
        obj.name &&
        obj.name.toLowerCase().includes(searchString.toLowerCase())
      ) {
        return true;
      }
      return false;
    });

    setData(searchResults);
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View>
        <Header
          customStyles={{
            marginHorizontal: 0,
          }}
          showBackIcon={true}
        />
        <Input
          textInputStyle={{ marginLeft: wp(14) }}
          onChangeText={(text) => searchObjects(listingData, text)}
          leftElement={<SearchIcon color={colors.grey} size={wp(25)} />}
          placeholder="Start typing to search..."
        />
      </View>
      <View
        style={{
          marginBottom: hp(150),
          marginTop: wp(10),
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={(item, index) => (
            <CarCard
              customStyles={{ margin: wp(5) }}
              listingData={item.item}
              key={index}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
