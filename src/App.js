import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyA85TOlbuYaLz9PMTEwAiVIReTcJ9xTDVY",
      authDomain: "manager-6a2cc.firebaseapp.com",
      databaseURL: "https://manager-6a2cc.firebaseio.com",
      storageBucket: "manager-6a2cc.appspot.com",
      messagingSenderId: "735290601017"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;