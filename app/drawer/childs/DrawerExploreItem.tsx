import React from "react";
import { View } from "react-native";
import { StarIcon } from "lucide-react-native";
import { styles } from "../styles/DrawerExploreItemStyles";
import { TextMain } from "@/components/TextMain";
import { colors } from "@/constants/colors";
import { Image } from "expo-image";
import { TouchableMain } from "@/components/TouchableMain";

export type DrawerExploreItemProps = {
  id: string;
  imageUrl: string;
  text: string;
  favorite: boolean;
  activeMenu?: string;
  onPressExplore?: (id: string) => void;
  onPressStar?: (id: string) => void;
};

export const DrawerExploreItem = ({
  id,
  imageUrl,
  text,
  favorite,
  activeMenu,
  onPressExplore,
  onPressStar,
}: DrawerExploreItemProps) => {
  return (
    <TouchableMain onPress={() => onPressExplore?.(id)}>
      <View
        style={[styles.container, id === activeMenu && styles.containerActive]}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <TextMain style={styles.text}>{text}</TextMain>
        <View style={styles.spacer} />
        <TouchableMain onPress={() => onPressStar?.(id)} style={styles.star}>
          <StarIcon
            size={16}
            color={colors.white}
            fill={favorite ? colors.white : undefined}
          />
        </TouchableMain>
      </View>
    </TouchableMain>
  );
};
