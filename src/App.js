import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;