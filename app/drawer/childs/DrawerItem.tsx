import { TextMain } from "@/components/TextMain";
import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { styles } from "../styles/DrawerItemStyles";
import { TouchableMain } from "@/components/TouchableMain";

type DrawerItemProps = {
  menu: string;
  activeMenu: string;
  icon: React.ReactNode;
  onPress: (menu: string) => void;
  style?: StyleProp<ViewStyle>;
};

export const DrawerItem = ({
  menu,
  activeMenu,
  icon,
  onPress,
  style,
}: DrawerItemProps) => {
  return (
    <TouchableMain
      onPress={() => onPress(menu)}
      style={[
        styles.itemContainer,
        activeMenu === menu && styles.itemContainerActive,
        style,
      ]}
    >
      <View style={styles.iconContainer}>{icon}</View>
      <TextMain
        style={[styles.itemText, activeMenu === menu && styles.itemTextActive]}
      >
        {menu}
      </TextMain>
    </TouchableMain>
  );
};
