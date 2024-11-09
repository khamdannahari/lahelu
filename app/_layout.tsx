import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { fonts } from "@/constants/fonts";
import { DrawerMain } from "./drawer/DrawerMain";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    [fonts.openSans]: require("../assets/fonts/OpenSans-Regular.ttf"),
    [fonts.openSansBold]: require("../assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <DrawerMain />;
}
