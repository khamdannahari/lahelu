import { NavigationContainer } from "@react-navigation/native";
import React, { useMemo } from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { home } from "@/constants/pages";
import HomeTab from "./HomeTab";
import FrashTab from "./FrashTab";
import TrendingTab from "./TrendingTab";
import { styles } from "./styles/_layoutStyles";
import { colors } from "@/constants/colors";

export default function _layout() {
  const Tab = createMaterialTopTabNavigator();

  const screenOptions: MaterialTopTabNavigationOptions = useMemo(
    () => ({
      swipeEnabled: false,
      tabBarScrollEnabled: false,
      tabBarActiveTintColor: colors.blue,
      tabBarInactiveTintColor: colors.codeE4E4E4,
      tabBarStyle: styles.tabBarStyle,
      tabBarLabelStyle: styles.tabBarLabelStyle,
      tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
    }),
    [],
  );

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name={home.homeTab} component={HomeTab} />
        <Tab.Screen name={home.freshTab} component={FrashTab} />
        <Tab.Screen name={home.trndingTab} component={TrendingTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
