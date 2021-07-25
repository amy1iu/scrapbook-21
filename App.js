import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import MainNavigator from './MainNavigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import imagesReducer from './redux/images-red';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  imager: imagesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}><MainNavigator/></Provider>
    );
  }
}
