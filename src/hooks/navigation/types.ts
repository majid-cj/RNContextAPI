export type NavigationState = {
  root: number;
  auth: number;
  app: number;
};

export type NavigationContextProps = {
  updateRoot: (view: number) => void;
  updateApp: (view: number) => void;
  updateAuth: (view: number) => void;
};

export type NavigationProviderProps = {
  state: NavigationState;
  actions: NavigationContextProps;
};
