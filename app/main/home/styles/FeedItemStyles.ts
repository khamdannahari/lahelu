import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: colors.background,
    marginBottom: 4,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginHorizontal: 16,
  },
  profileImage: {
    width: 28,
    height: 28,
    borderRadius: 20,
    marginRight: 8,
  },
  name: {
    fontSize: 14,
    marginStart: 2,
    fontFamily: fonts.openSansBold,
    color: colors.white,
  },
  timeAgo: {
    fontSize: 12,
    marginStart: 6,
    marginTop: 2,
    fontFamily: fonts.openSansBold,
    color: colors.codeB7B7B7,
  },
  spacer: {
    flex: 1,
  },
  textContent: {
    fontSize: 18,
    marginBottom: 8,
    color: colors.white,
    fontFamily: fonts.openSansBold,
    marginHorizontal: 16,
  },
  mediaContent: {
    width: "100%",
    overflow: "hidden",
    marginBottom: 8,
    transform: [{ scale: 1 }],
  },
  tipHastagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 16,
  },
  tipContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    height: 24,
    backgroundColor: colors.codeDC952B,
    marginRight: 8,
  },
  tipText: {
    fontSize: 14,
    marginStart: 4,
    color: colors.white,
    fontFamily: fonts.openSansBold,
  },
  chip: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.code3C3D37,
    borderRadius: 16,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginRight: 8,
    marginBottom: 4,
  },
  chipText: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fonts.openSansBold,
  },
  actionRow: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    zIndex: 0,
  },
  likeDislikeContainer: {
    borderRadius: 8,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.code3C3D37,
  },
  lineVertical: {
    width: 1,
    backgroundColor: colors.code3C3D37,
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  dislikeButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  commentButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.code3C3D37,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 8,
  },
  forwardButton: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.code3C3D37,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  actionText: {
    fontSize: 14,
    marginLeft: 6,
    color: colors.white,
    fontFamily: fonts.openSansBold,
  },
  flexSpacer: {
    flex: 1,
  },
  playIconOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    width: "100%",
    height: 5,
    position: "absolute",
    bottom: 5,
  },
  muteButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: 10,
  },
});