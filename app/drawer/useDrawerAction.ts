import { useCallback } from "react";
import { _useDrawerState } from "./useDrawerState";

export const useDrawerAction = () => {
  const getState = _useDrawerState((state) => state.getState);
  const setState = _useDrawerState((state) => state.setState);

  const onPressMenu = useCallback(
    (activeMenu: string) => {
      setState({ activeMenu });
    },
    [setState],
  );

  const onPressExplore = useCallback(
    (exploreMenuId: string) => {
      setState({ activeMenu: exploreMenuId });
    },
    [setState],
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

  const onPressInfo = useCallback(
    (activeMenu: string) => {
      setState({ activeMenu });
    },
    [setState],
  );

  return { onPressMenu, onPressExplore, onPressStar, onPressInfo };
};
