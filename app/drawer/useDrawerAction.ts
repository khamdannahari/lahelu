import { useCallback } from "react";
import { _useDrawerState } from "./useDrawerState";
import { useRouter } from "expo-router";
import { menus } from "@/constants/menus";
import { page } from "@/constants/pages";

export const useDrawerAction = () => {
  const router = useRouter();

  const getState = _useDrawerState((state) => state.getState);
  const setState = _useDrawerState((state) => state.setState);

  const onPressMenu = useCallback(
    (activeMenu: string) => {
      const targetPage = activeMenu === menus.home ? page.main : page.blank;
      router.navigate(targetPage);
      setState({ activeMenu });
    },
    [router, setState],
  );

  const onPressExplore = useCallback(
    (exploreMenuId: string) => {
      router.navigate(page.blank);
      setState({ activeMenu: exploreMenuId });
    },
    [router, setState],
  );

  const onPressStar = useCallback(
    (id: string) => {
      const { exploreMenus } = getState();
      const exploreMenusUpdated = exploreMenus
        .map((menu) => ({
          ...menu,
          favorite: menu.id === id ? !menu.favorite : menu.favorite,
        }))
        .sort((a, b) => {
          // make favorites always on top
          return Number(b.favorite) - Number(a.favorite);
        });

      setState({ exploreMenus: exploreMenusUpdated });
    },
    [getState, setState],
  );

  const onPressInfo = useCallback(() => {
    router.navigate(page.blank);
    setState({ activeMenu: menus.blank });
  }, [router, setState]);

  return { onPressMenu, onPressExplore, onPressStar, onPressInfo };
};
