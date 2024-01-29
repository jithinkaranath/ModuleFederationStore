import React from "react";
import { Provider } from "react-redux";
import { store , selectors} from "./app/store";
import actions from "./app/actions";

export function useStore() {
  return {actions, selectors};
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
