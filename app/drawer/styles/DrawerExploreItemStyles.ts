import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    minHeight: 42,
    paddingHorizontal: 32,
  },
  containerActive: {
    backgroundColor: colors.blue,
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.codeDDD,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: colors.white,
  },
  spacer: {
    flex: 1,
  },
  star: {
    padding: 6,
    borderRadius: 4,
    backgroundColor: colors.background,
  },
});
