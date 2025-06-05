import {
  ThemeActionType,
  type ThemeAction,
} from "../../action/ThemeActions/ThemeActions";

export type ThemeState = {
  darkMode: boolean;
};
export const ThemeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case ThemeActionType.TOGGLE_DARK_MODE:
      return { darkMode: !state.darkMode };

    default:
      return state;
  }
};
