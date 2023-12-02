'use client'
import { createStore } from './store';
import { Provider } from 'react-redux';

const store = createStore();

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
