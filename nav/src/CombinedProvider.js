// CombinedProvider.js
import React from 'react';
import { StoreProvider as StoreProviderApp1, useStore as useStoreApp1 } from './store';
import { StoreProvider as StoreProviderApp2, useStore as useStoreApp2 } from 'store/store';

const CombinedProvider = ({ children }) => {
  const { actions: actionsApp1, selectors: selectorsApp1 } = useStoreApp1();
  const { actions: actionsApp2, selectors: selectorsApp2 } = useStoreApp2();

  // Combine actions and selectors as needed

  return (
    <StoreProviderApp1>
      <StoreProviderApp2>
        {children}
      </StoreProviderApp2>
    </StoreProviderApp1>
  );
};

export default CombinedProvider;
