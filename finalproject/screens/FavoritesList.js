import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  AsyncStorage
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

//import CountDownTimer from '../components/CountDownTimer'

export default class FavoriteScreen extends React.Component {
  state = {
    favorites:[],
    timer:30,
    paused:false,
    interval: null
  }
  startTimer =() =>{
    const interval = setInterval(() =>{
      this.updateTimer()
    }, 1000)
    this.setState({
      interval
    })
  }
  updateTimer =() =>{
    if (!this.state.paused){
      this.setState({
        timer:this.state.timer-1
      })
    } else {
      clearInterval(this.state.interval)
    }
  }
  componentDidMount(){
    this.getFavorites()
    this.startTimer()
  }
  getFavorites = async() => {
    let favorites = await AsyncStorage.getItem("favoriteList")
    favorites = JSON.parse(favorites)
    this.setState({favorites})
  }
  static navigationOptions = {
    header: null,
  };
  _gotoScreen = (item) => {
    console.log(favoriteList)
    this.props.navigation.navigate("Details", item)
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Here's Your Faves</Text>
            <FlatList
             data={this.state.favorites}
             keyExtractor={this._keyExtractor}
              renderItem={({item}) => <TouchableOpacity onPress={(event) => { this._gotoScreen(item)}}>
                <Image source={item.image} style={{width:200,height:200}} />
              </TouchableOpacity>}
            />
            <Text style={styles.getLazyText}>Or dont its cool</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
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
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    marginTop:50,
    textAlign: 'center',
  },
  getLazyText:{
    fontSize: 10,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    marginTop:75,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
