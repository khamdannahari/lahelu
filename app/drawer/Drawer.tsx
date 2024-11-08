import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { MenuIcon, SearchIcon } from "lucide-react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { styles } from "./styles/DrawerStyles";
import { colors } from "@/constants/colors";
import { Image } from "expo-image";
import { DrawerContent } from "./childs/DrawerContent";
import { useDrawerState } from "./useDrawerState";
import { useDrawerAction } from "./useDrawerAction";
import Blank from "../blank";
import { menus } from "@/constants/menus";
import Main from "../main";
import { TouchableMain } from "@/components/TouchableMain";
import { pages } from "@/constants/pages";

type DrawerParamList = {
  main: undefined;
  blank: undefined;
};

const DrawerNav = createDrawerNavigator<DrawerParamList>();

export const Drawer = () => {
  const activeMenu = useDrawerState((state) => state.activeMenu);
  const exploreMenus = useDrawerState((state) => state.exploreMenus);

  const { onPressMenu, onPressExplore, onPressStar, onPressInfo } =
    useDrawerAction();

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <DrawerNav.Navigator
          drawerContent={(props) => (
            <DrawerContent
              activeMenu={activeMenu}
              exploreMenus={exploreMenus}
              onPressMenu={(menu) => {
                const page = menu === menus.home ? pages.main : pages.blank;
                props.navigation.navigate(page);
                onPressMenu(menu);
              }}
              onPressExplore={(exploreMenuId) => {
                props.navigation.navigate(pages.blank);
                onPressExplore(exploreMenuId);
              }}
              onPressStar={onPressStar}
              onPressInfo={() => {
                props.navigation.navigate(pages.blank);
                onPressInfo(menus.blank);
              }}
            />
          )}
          screenOptions={({ navigation }) => ({
            drawerStyle: styles.drawer,
            headerStyle: styles.header,
            headerLeft: () => (
              <TouchableMain
                onPress={() => navigation.toggleDrawer()}
                style={styles.menuIcon}
              >
                <MenuIcon size={24} color={colors.white} />
              </TouchableMain>
            ),
            headerTitle: () => (
              <Image
                source={require("../../assets/images/lahelu.png")}
                style={styles.headerLogo}
                contentFit="contain"
              />
            ),
            headerRight: () => (
              <TouchableMain style={styles.searchIcon}>
                <SearchIcon size={24} color={colors.white} />
              </TouchableMain>
            ),
          })}
        >
          <DrawerNav.Screen name={pages.main} component={Main} />
          <DrawerNav.Screen name={pages.blank} component={Blank} />
        </DrawerNav.Navigator>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};
