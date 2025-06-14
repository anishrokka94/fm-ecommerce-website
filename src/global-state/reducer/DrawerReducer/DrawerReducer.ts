import { DRAWER_ACTION_TYPE } from "../../action/DrawerActions/DrawerActions";

const DrawerReducer = (state, action) => {
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
