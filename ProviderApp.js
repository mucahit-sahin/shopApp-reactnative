import React from 'react';
import {Provider} from 'react-redux';
import App from './src/App';
import {store} from './src/Store/Store';

const ProviderApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ProviderApp;
