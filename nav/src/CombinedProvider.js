import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { StoreProvider as StoreProviderApp1, useStore as useStoreApp1 } from './store';
import { StoreProvider as StoreProviderApp2, useStore as useStoreApp2 } from 'store/store';

const { rootReducer } = useStoreApp1();
const {StoreRootReducer} =  useStoreApp2();


const sagaMiddleware = createSagaMiddleware();

const middleWares = [];
middleWares.push(sagaMiddleware);
middleWares.push(logger);

const rootReducers = combineReducers({
  ...rootReducer,
  ...StoreRootReducer
});

export function useStore() {
  return {
    ...useStoreApp1.actions,
    ...useStoreApp2.actions,
    ...useStoreApp1.selectors,
    ...useStoreApp2.selectors,
  };
}

export function CombinedStoreProvider({ children }) {
  const store = configureStore({
  reducer: rootReducers,
  devTools: true,
  middleware: () => middleWares
});
  return <Provider store={store}>{children}</Provider>;
}