import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderTopColor: "#3C3D37",
    borderTopWidth: 1,
    marginTop: 14,
    paddingTop: 18,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 28,
  },
  text: {
    fontSize: 18,
    color: colors.white,
  },
});
