import { menus } from "@/constants/menus";
import { DrawerExploreItemProps } from "./childs/DrawerExploreItem";
import { createState } from "../utils/createState";

type DrawerState = {
  activeMenu: string;
  exploreMenus: DrawerExploreItemProps[];
};

const exploreMenus: DrawerExploreItemProps[] = [
  {
    id: "1",
    imageUrl:
      "https://i.pinimg.com/736x/d2/d0/dc/d2d0dcda8c9979077d4589b2867b9d1f.jpg",
    text: "Lucu",
    favorite: false,
  },
  {
    id: "2",
    imageUrl:
      "https://i.pinimg.com/736x/d2/d0/dc/d2d0dcda8c9979077d4589b2867b9d1f.jpg",
    text: "Relate",
    favorite: false,
  },
  {
    id: "3",
    imageUrl:
      "https://i.pinimg.com/736x/d2/d0/dc/d2d0dcda8c9979077d4589b2867b9d1f.jpg",
    text: "Gaming",
    favorite: false,
  },
  {
    id: "4",
    imageUrl:
      "https://i.pinimg.com/736x/d2/d0/dc/d2d0dcda8c9979077d4589b2867b9d1f.jpg",
    text: "Nostalgia",
    favorite: false,
  },
  {
    id: "5",
    imageUrl:
      "https://i.pinimg.com/736x/d2/d0/dc/d2d0dcda8c9979077d4589b2867b9d1f.jpg",
    text: "Sad",
    favorite: false,
  },
  {
    id: "6",
    imageUrl:
      "https://i.pinimg.com/736x/d2/d0/dc/d2d0dcda8c9979077d4589b2867b9d1f.jpg",
    text: "Random",
    favorite: false,
  },
  {
    id: "7",
    imageUrl:
      "https://i.pinimg.com/736x/d2/d0/dc/d2d0dcda8c9979077d4589b2867b9d1f.jpg",
    text: "Wtf",
    favorite: false,
  },
  {
    id: "8",
    imageUrl:
      "https://i.pinimg.com/736x/d2/d0/dc/d2d0dcda8c9979077d4589b2867b9d1f.jpg",
    text: "Rage",
    favorite: false,
  },
  {
    id: "9",
    imageUrl:
      "https://i.pinimg.com/736x/d2/d0/dc/d2d0dcda8c9979077d4589b2867b9d1f.jpg",
    text: "Anime",
    favorite: false,
  },
  {
    id: "10",
    imageUrl:
      "https://i.pinimg.com/736x/d2/d0/dc/d2d0dcda8c9979077d4589b2867b9d1f.jpg",
    text: "Sarkas",
    favorite: false,
  },
];

const initialState: DrawerState = {
  activeMenu: menus.home,
  exploreMenus: exploreMenus,
};

export const { _state: _useDrawerState, state: useDrawerState } =
  createState(initialState);
