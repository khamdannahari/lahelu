import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { MenuIcon, SearchIcon } from "lucide-react-native";
import { styles } from "./styles/DrawerStyles";
import { colors } from "@/constants/colors";
import { Image } from "expo-image";
import { DrawerContent } from "./childs/DrawerContent";
import { useDrawerState } from "./useDrawerState";
import { useDrawerAction } from "./useDrawerAction";
import { TouchableMain } from "@/components/TouchableMain";
import { pageName } from "@/constants/pages";
import { Drawer } from "expo-router/drawer";

export const DrawerMain = () => {
  const activeMenu = useDrawerState((state) => state.activeMenu);
  const exploreMenus = useDrawerState((state) => state.exploreMenus);

  const { onPressMenu, onPressExplore, onPressStar, onPressInfo } =
    useDrawerAction();

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Drawer
          drawerContent={() => (
            <DrawerContent
              activeMenu={activeMenu}
              exploreMenus={exploreMenus}
              onPressMenu={onPressMenu}
              onPressExplore={onPressExplore}
              onPressStar={onPressStar}
              onPressInfo={onPressInfo}
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
          <Drawer.Screen name={pageName.main} />
          <Drawer.Screen name={pageName.blank} />
        </Drawer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};
