import React, { Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import Sound from './Sound';

class Instruments extends Component {

  static navigationOptions = {
    title: 'Instruments'
  }

  onPressButton() {
    this.props.navigation.navigate('Main');
  }
  
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.paragraph}>Ready to learn?</Text>
        
        <View style={styles.fixToText}>
          <Button
            title="piano"
            //onPress={() => Sound.play()}
          />
          <Button
            title="violin"
            //onPress={() => Sound.play()}
          />

          <Button
            title="drum"
            //onPress={() => Sound.play()}
          />
          <Button
            title="clarinet"
            //onPress={() => Sound.play()}
          />
        </View>

        <Button
        onPress = {() => this.onPressButton()}
        title = "Back"
        />
      </View>
    );
  }
}

export default Instruments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingBottom:10
  },
});