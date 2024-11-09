import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 28,
    backgroundColor: colors.background,
  },
  drawerText: {
    fontSize: 18,
    color: colors.code333,
    fontFamily: fonts.openSans,
  },
  discord: {
    width: 20,
    height: 20,
  },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 4,
    color: colors.code588EC9,
    fontSize: 18,
    marginHorizontal: 28,
    fontFamily: fonts.openSansBold,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 28,
  },
  infoText: {
    color: colors.white,
    marginRight: 8,
  },
  spacer: {
    height: 48,
  },
});
