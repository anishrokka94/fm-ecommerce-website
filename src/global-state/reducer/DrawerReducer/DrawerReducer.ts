import { DRAWER_ACTION_TYPE } from "../../action/DrawerActions/DrawerActions";
import type {
  DrawerAction,
  DrawerState,
} from "../../context/DrawerContext/DrawerContext.d";

const DrawerReducer = (state: DrawerState, action: DrawerAction) => {
  switch (action.type) {
    case DRAWER_ACTION_TYPE.OPEN:
      console.log("state", state);
      return { ...state, isOpen: true };

    case DRAWER_ACTION_TYPE.CLOSE:
      return { ...state, isOpen: false };

    default:
      return state;
  }
};

export default DrawerReducer;
