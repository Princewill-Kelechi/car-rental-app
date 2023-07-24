import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

const DotIndicator = ({ itemCount, activeIndex }) => {
  return (
    <View style={styles.container}>
      {[...Array(itemCount).keys()].map((index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === activeIndex ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    width: 16,
    backgroundColor: colors.veryDarkBlue,
  },
  inactiveDot: {
    backgroundColor: colors.gray4,
  },
});

export default DotIndicator;
