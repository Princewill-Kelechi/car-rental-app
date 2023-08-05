import { StyleSheet } from "react-native";
import { wp } from "../utils/responsive-dimension";
import { colors } from "./colors";

export const globalStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingHorizontal: wp(30),
        marginTop: wp(50),
        backgroundColor : colors.gray6,
      },
      scrollViewContent: {
        flexGrow: 1,
        paddingBottom: wp(60),
      },
})