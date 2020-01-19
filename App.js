import { Component } from 'react';
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import MainScreen from './MainScreen.js';
import Animals from './Animals.js';

import Transportation from './Transportation.js';
import Instruments from './Instruments.js';

class HomeScreen extends Component {

  static navigationOptions = {
    header: null
  }

  onPressButton() {
    this.props.navigation.navigate('Main');
  }
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.paragraph}>Hiii!</Text>
        <Text style = {styles.paragraph}>Let's learn about the sounds of life!</Text>
        <Button
        onPress = {() => this.onPressButton()}
        title = "Continue"
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Main: {screen: MainScreen},
    Animal: {screen: Animals},
    Transportation: {screen: Transportation},
    Instruments: {screen: Instruments}

  }
)

const AppContainer = createAppContainer(RootStack);

export default class registration extends Component {

  render() {
    return (
      <AppContainer/>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginBottom: 50,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
});
