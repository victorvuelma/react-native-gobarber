import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import DevMenu from '@terrysahaidak/react-native-devmenu';

import './config/ReacotronConfig';

import { store, persistor } from './store';

import App from './App';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <DevMenu>
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
          <App />
        </DevMenu>
      </PersistGate>
    </Provider>
  );
}
