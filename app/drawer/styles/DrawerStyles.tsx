import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    width: "100%",
    maxWidth: 600,
    backgroundColor: colors.background,
  },
  containerContent: {
    maxWidth: 600,
  },
  drawer: {
    width: "60%",
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.background,
  },
  menuIcon: {
    marginLeft: 16,
  },
  searchIcon: {
    marginRight: 16,
  },
  headerLogo: {
    height: 24,
    width: 100,
    marginTop: 2,
  },
});
