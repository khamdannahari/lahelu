import React from "react";
import { Tabs } from "expo-router";
import { colors } from "@/constants/colors";
import {
  BellIcon,
  CirclePlusIcon,
  HomeIcon,
  UserRoundIcon,
  UsersRoundIcon,
} from "lucide-react-native";
import { main } from "@/constants/pages";

export default function _layout() {
  return (
    <Tabs
      initialRouteName={main.home}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Tabs.Screen
        name={main.home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <HomeIcon size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={main.topic}
        options={{
          tabBarIcon: ({ size, color }) => (
            <UsersRoundIcon size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={main.upload}
        options={{
          tabBarIcon: ({ size, color }) => (
            <CirclePlusIcon size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={main.notification}
        options={{
          tabBarIcon: ({ size, color }) => (
            <BellIcon size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={main.profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <UserRoundIcon size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
