import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/screens/App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {store} from './src/redux';

const RNReduxWrap = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNReduxWrap);
