import React, { Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { Audio } from 'expo-av';


class Animal extends Component {


  static navigationOptions = {
    title: 'Animal'
  }

  onPressButton() {
    this.props.navigation.navigate('Main');
  }

  // const soundObject = new Audio.Sound();
  // try {
  //   await soundObject.loadAsync(require('./assets/sounds/hello.mp3'));
  //   await soundObject.playAsync();
  //   // Your sound is playing!
  // } catch (error) {
  //   // An error occurred!
  // }
  
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.paragraph}>Ready to learn?</Text>
        
        <View style={styles.fixToText}>
          <Button
            title="dog"
            //onPress={() => Sound.play}
          />
          <Button
            title="cat"
            //onPress={() => Sound.play()}
          />

          <Button
            title="panda"
            //onPress={() => Sound.play()}
          />
          <Button
            title="Meercat"
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

export default Animal;

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