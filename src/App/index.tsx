import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from '../model/Store';
import Navigator from './../Navigator';
const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};
export default App;
