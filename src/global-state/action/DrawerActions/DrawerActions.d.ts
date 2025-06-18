import { DRAWER_ACTION_TYPE } from "./DrawerActions";

export type DrawerAction =
  | { type: typeof DRAWER_ACTION_TYPE.OPEN }
  | { type: typeof DRAWER_ACTION_TYPE.CLOSE };
