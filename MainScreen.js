import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

  toAnimal() {
    this.props.navigation.navigate('Animal');
  }

  toTransportation() {
    this.props.navigation.navigate('Transportation');
  }

  toInstruments() {
    this.props.navigation.navigate('Instruments');
  }
  render() {
    return (
      <View style={styles.container1}>
        <View  style={styles.container1} >
          <Text style={styles.paragraph} >
            WELCOME
          </Text>
          <Card>
            <AssetExample />
          </Card>
        </View>
        <View style = {styles.button}>
          <Button
          onPress = {() => this.toAnimal()}
          title = "Animals"
          />
        </View>
        <View style = {styles.button}>
          <Button
          onPress = {() => this.toTransportation()}
          title = "Transportation"
          />
        </View>
        <View style = {styles.button}>
          <Button
          onPress = {() => this.toInstruments()}
          title = "Instruments"
          />
        </View>

      </View>
        
      
    );
  }
}



const styles = StyleSheet.create({
  container1: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 4,
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    paddingTop:20,
    paddingBottom: 30
  }
});
