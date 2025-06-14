export interface DrawerState {
  isOpen: boolean;
}

export interface DrawerAction {
  type: string; // Or create a union type like 'DRAWER_OPEN' | 'DRAWER_CLOSE'
}

export interface DrawerContextType {
  state: DrawerState;
  drawerDispatch: React.Dispatch<DrawerAction>;
}
