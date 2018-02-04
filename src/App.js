import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers';


class App extends Component {
  render() {
    const store = createStore(
      reducers,
      {},
      compose(
        applyMiddleware(ReduxThunk),
        autoRehydrate()
      )
    );

    persistStore(store, { storage: AsyncStorage, whitelist: [''] });

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
