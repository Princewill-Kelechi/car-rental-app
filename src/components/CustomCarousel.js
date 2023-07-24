import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { colors } from "../theme/colors";

const CustomCarousel = ({
  data,
  renderItem,
  carouselStyle,
  scrollViewProps,
  indicatorStyle,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setActiveIndex(pageNum);
  };

  const handleDotPress = (index) => {
    scrollViewRef.current.scrollTo({
      x: index * Dimensions.get("window").width,
      animated: true,
    });
  };

  return (
    <View style={[styles.container, carouselStyle]}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        {...scrollViewProps}
      >
        {data.map((item, index) => (
          <View key={index}>{renderItem(item)}</View>
        ))}
      </ScrollView>

      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <IndicatorDot
            key={index}
            active={index === activeIndex}
            onPress={() => handleDotPress(index)}
          />
        ))}
      </View>
    </View>
  );
};

const IndicatorDot = ({ active, onPress }) => {
  const dotStyle = [styles.dot, active ? styles.activeDot : styles.inactiveDot];

  return <Animated.View style={dotStyle} onPress={onPress} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
  },
  indicatorContainer: {
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
    width: 15,
    backgroundColor: colors.veryDarkBlue,
  },
  inactiveDot: {
    backgroundColor: colors.gray5,
  },
});

export default CustomCarousel;
