import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.background,
    elevation: 0,
    height: 48,
    justifyContent: "center",
  },
  tabBarLabelStyle: {
    fontSize: 16,
    textTransform: "none",
    fontFamily: fonts.openSansBold,
  },
  tabBarIndicatorStyle: {
    backgroundColor: colors.blue,
    height: 2,
  },
});
