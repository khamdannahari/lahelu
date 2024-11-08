import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    paddingHorizontal: 28,
  },
  itemContainerActive: {
    backgroundColor: colors.activeDrawerItem,
  },
  iconContainer: {
    marginRight: 14,
  },
  itemText: {
    fontSize: 18,
    color: "white",
  },
  itemTextActive: {
    fontSize: 18,
    fontFamily: fonts.openSansBold,
  },
});
