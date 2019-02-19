import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  ImageBackground
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { AuthSession } from 'expo';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Princess',
  };

  render() {
    if(this.props.navigation.state.params.name == 'ariel'){ return(
      <ScrollView style={styles.container}>
      <ImageBackground source={require('../assets/images/pinksparkles.jpg')} style={{width:'100%', height:'100%'}}>
        <View style={styles.getStartedContainer}>
          <Image source= {require('../assets/images/ariel.png')} style={{width:200,height:200}} />          
          <Text style={styles.getStartedText}>Ariel is from The Little Mermaid, released in 1989.</Text>
        </View>
        </ImageBackground>
      </ScrollView>
    )}
    else if(this.props.navigation.state.params.name == 'rapunzel'){
      return(
      <ScrollView style={styles.container}>
      <ImageBackground source={require('../assets/images/pinksparkles.jpg')} style={{width:'100%', height:'100%'}}>
        <View style={styles.getStartedContainer}>
          <Image source={require('../assets/images/rapunzel.jpg')} style={{width:200,height:200}} />
          <Text style={styles.getStartedText}>I love Disney Princesses</Text>
        </View>
        </ImageBackground>
      </ScrollView>
    )}
    else if(this.props.navigation.state.params.name == 'belle'){
      return(
      <ScrollView style={styles.container}>
      <ImageBackground source={require('../assets/images/pinksparkles.jpg')} style={{width:'100%', height:'100%'}}>
        <View style={styles.container}>
          <Image source={require('../assets/images/belle.jpg')} style={{width:200,height:200}} />
          <Text style={styles.getStartedText}>I love Disney Princesses</Text>
        </View>
        </ImageBackground>
      </ScrollView>
    )}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    color: 'rgb(27,255,0)',
    fontWeight: 'bold',
  },
  getStartedText: {
    fontSize: 25,
    lineHeight: 30,
    color: 'rgb(27,255,0)',
    fontWeight: 'bold',
  },
});
