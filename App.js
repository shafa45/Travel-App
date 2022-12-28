/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './src/screens/Home';



const App = () => {
 
  return (
    <Home/>
  );
};

const styles = StyleSheet.create({
  flex:{
    flex: 1,
    backgroundColor: 'green'
  },
  safeAreaView: {
    backgroundColor: 'blue'
  },
view: {
  backgroundColor: 'red'
}
});

export default App;
