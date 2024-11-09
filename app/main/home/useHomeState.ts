import { createState } from "@/app/utils/createState";

type HomeState = {};

const initialState: HomeState = {};

export const { _state: _useHomeState, state: useHomeState } =
  createState(initialState);
