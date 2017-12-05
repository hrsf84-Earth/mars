import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../components/App';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const Store = createStoreWithMiddleware(reducers, {mainView: 'graphAbsolute',
locationData: {latitude: 40.7127753, longitude:-74.0059728}
})
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={Store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app'),
);

export default Store
