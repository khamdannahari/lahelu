import React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "../styles/DrawerContentStyles";
import {
  BookImageIcon,
  CircleDollarSignIcon,
  ClockIcon,
  HandHeartIcon,
  HomeIcon,
  MedalIcon,
  ShuffleIcon,
  TrendingUpIcon,
  TrophyIcon,
  UsersRoundIcon,
} from "lucide-react-native";
import { colors } from "@/constants/colors";
import { DrawerItem } from "./DrawerItem";
import { AccordionItem } from "@/components/AccordionItem";
import { Image } from "expo-image";
import { TextMain } from "@/components/TextMain";
import { DrawerExploreItem, DrawerExploreItemProps } from "./DrawerExploreItem";
import { TouchableMain } from "@/components/TouchableMain";
import { menus } from "@/constants/menus";
import { copies } from "@/constants/copies";

type DrawerContentProps = {
  activeMenu: string;
  exploreMenus: DrawerExploreItemProps[];
  onPressMenu: (menu: string) => void;
  onPressExplore: (id: string) => void;
  onPressStar: (id: string) => void;
  onPressInfo: () => void;
};

export const DrawerContent = ({
  activeMenu,
  exploreMenus,
  onPressMenu,
  onPressExplore,
  onPressStar,
  onPressInfo,
}: DrawerContentProps) => {
  return (
    <ScrollView style={styles.drawerContainer}>
      <DrawerItem
        menu={menus.home}
        activeMenu={activeMenu}
        icon={<HomeIcon size={20} color={colors.white} />}
        onPress={onPressMenu}
      />

      <DrawerItem
        menu={menus.fresh}
        activeMenu={activeMenu}
        icon={<ClockIcon size={20} color={colors.white} />}
        onPress={onPressMenu}
      />

      <DrawerItem
        menu={menus.trending}
        activeMenu={activeMenu}
        icon={<TrendingUpIcon size={20} color={colors.white} />}
        onPress={onPressMenu}
      />

      <DrawerItem
        menu={menus.topic}
        activeMenu={activeMenu}
        icon={<UsersRoundIcon size={20} color={colors.white} />}
        onPress={onPressMenu}
      />

      <AccordionItem text={copies.othersMeme}>
        <DrawerItem
          menu={menus.ranking}
          activeMenu={activeMenu}
          icon={<TrophyIcon size={20} color={colors.white} />}
          onPress={onPressMenu}
        />

        <DrawerItem
          menu={menus.saved}
          activeMenu={activeMenu}
          icon={<BookImageIcon size={20} color={colors.white} />}
          onPress={onPressMenu}
        />

        <DrawerItem
          menu={menus.random}
          activeMenu={activeMenu}
          icon={<ShuffleIcon size={20} color={colors.white} />}
          onPress={onPressMenu}
        />
      </AccordionItem>

      <AccordionItem text={copies.browse}>
        <DrawerItem
          menu={menus.donor}
          activeMenu={activeMenu}
          icon={<HandHeartIcon size={20} color={colors.white} />}
          onPress={onPressMenu}
        />

        <DrawerItem
          menu={menus.medal}
          activeMenu={activeMenu}
          icon={<MedalIcon size={20} color={colors.white} />}
          onPress={onPressMenu}
        />

        <DrawerItem
          menu={menus.coinShop}
          activeMenu={activeMenu}
          icon={<CircleDollarSignIcon size={20} color={colors.white} />}
          onPress={onPressMenu}
        />

        <DrawerItem
          menu={menus.discord}
          activeMenu={activeMenu}
          icon={
            <Image
              source={require("../../../assets/icons/discord.svg")}
              style={styles.discord}
            />
          }
          onPress={onPressMenu}
        />
      </AccordionItem>

      <TextMain style={styles.sectionTitle}>{copies.explore}</TextMain>

      {exploreMenus.map((exploreMenu) => (
        <DrawerExploreItem
          key={exploreMenu.id}
          {...exploreMenu}
          activeMenu={activeMenu}
          onPressExplore={onPressExplore}
          onPressStar={onPressStar}
        />
      ))}

      <TextMain style={styles.sectionTitle}>{copies.information}</TextMain>

      <View style={styles.infoContainer}>
        <TouchableMain onPress={onPressInfo}>
          <TextMain style={styles.infoText}>{copies.contact}</TextMain>
        </TouchableMain>
        <TouchableMain onPress={onPressInfo}>
          <TextMain style={styles.infoText}>{copies.rule}</TextMain>
        </TouchableMain>
        <TouchableMain onPress={onPressInfo}>
          <TextMain style={styles.infoText}>{copies.provision}</TextMain>
        </TouchableMain>
      </View>

      <View style={styles.infoContainer}>
        <TouchableMain onPress={onPressInfo}>
          <TextMain style={styles.infoText}>{copies.policy}</TextMain>
        </TouchableMain>
        <TouchableMain onPress={onPressInfo}>
          <TextMain style={styles.infoText}>{copies.laheluPlus}</TextMain>
        </TouchableMain>
        <TouchableMain onPress={onPressInfo}>
          <TextMain style={styles.infoText}>{copies.coin}</TextMain>
        </TouchableMain>
      </View>

      <View style={styles.spacer} />
    </ScrollView>
  );
};
