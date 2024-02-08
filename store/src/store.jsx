import React from "react";
import { Provider } from "react-redux";
import { store , selectors} from "./app/store";
import actions from "./app/actions";
import { rootReducer as StoreRootReducer, sliceActions } from "./app/rootReducers";

export function useStore() {
  return {actions, selectors, StoreRootReducer, sliceActions};
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
