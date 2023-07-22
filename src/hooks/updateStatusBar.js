import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { Platform, StatusBar, StatusBarStyle } from "react-native";

export default (
  style = "light-content",
  backgroundColor = "#fff",
  translucent = false
) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(style);
      if (Platform.OS === "android") {
        StatusBar.setTranslucent(translucent);
        StatusBar.setBackgroundColor(backgroundColor);
      }
    }, [backgroundColor, translucent])
  );
};
