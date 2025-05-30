import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigation';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}