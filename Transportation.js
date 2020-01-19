import React, { Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import Sound from './Sound';

class Transportation extends Component {

  static navigationOptions = {
    title: 'Transportation'
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
            title="car"
            //onPress={() => Sound.play()}
          />
          <Button
            title="bus"
            //onPress={() => Sound.play()}
          />

          <Button
            title="plane"
            //onPress={() => Sound.play()}
          />
          <Button
            title="train"
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

export default Transportation;

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