import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  View,
  ImageBackground,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

const rides = 
[
  {
    key: 'ass',
    isfave: false,
    image: require('../assets/images/ass.jpg')
  },
  {
    key: 'astro',
    isfave: false,
    image: require('../assets/images/astroorbiter.jpg')
  },
  {
    key: 'barnstormer',
    isfave: false,
    image: require('../assets/images/barnstormer.jpg')
  },
  {
    key: 'bigthunder',
    isfave: false,
    image: require('../assets/images/thunder.jpg')
  },
  {
    key: 'buzz',
    isfave: false,
    image: require('../assets/images/buzz.jpg')
  },
  {
    key: 'carouselofprogress',
    isfave: false,
    image: require('../assets/images/carouselofprogress.jpg')
  },
  {
    key: 'dinosaur',
    isfave: false,
    image: require('../assets/images/dinosaur.jpg')
  },
  {
    key: 'dumbo',
    isfave: false,
    image: require('../assets/images/dumbo.jpg')
  },
  {
    key: 'everest',
    isfave: false,
    image: require('../assets/images/everest.jpg')
  },
  {
    key: 'fop',
    isfave: false,
    image: require('../assets/images/fop.jpg')
  },
  {
    key: 'frozen',
    isfave: false,
    image: require('../assets/images/frozen.jpg')
  },
  {
    key: 'granfiesta',
    isfave: false,
    image: require('../assets/images/granfiesta.jpg')
  },
  {
    key: 'hauntedmansion',
    isfave: false,
    image: require('../assets/images/mansion.jpg')
  },
  {
    key: 'smallworld',
    isfave: false,
    image: require('../assets/images/smallworld.jpg')
  },
  {
    key: 'imgination',
    isfave: false,
    image: require('../assets/images/figment.jpg')
  },
  {
    key: 'junglecruise',
    isfave: false,
    image: require('../assets/images/junglecruise.jpg')
  },
  {
    key: 'kali',
    isfave: false,
    image: require('../assets/images/kali.jpg')
  }
  ]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Rides at Walt Disney World',
  };
  _gotoScreen = (key) => {
    console.log("Going to " + key);
  }
  handlefavoriteClick = async (item) => {
    let favoriteList = await AsyncStorage.getItem("favoriteList")
    favoriteList = JSON.parse(favoriteList)
    if(!favoriteList || !Array.isArray(favoriteList)){

      favoriteList = []
    }
    favoriteList = favoriteList.filter(x => x.key !== item.key)
      favoriteList.push(item)

    await AsyncStorage.setItem("favoriteList", JSON.stringify(favoriteList))
    const x = await AsyncStorage.getItem("favoriteList")
    console.log(favoriteList)
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text style={styles.getStartedText}>Press Your Fave Rides</Text>
        <Button
          title = "Favorites"
          onPress = {
            () => navigate("FavoritesList.js")
          }
        />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>

            <FlatList
             data={rides}
             keyExtractor={this._keyExtractor}
              renderItem={({item}) => <TouchableOpacity onPress={(event) => { this.handlefavoriteClick(item)}}>
                <Image source={item.image} style={{width:200,height:200}} />
              </TouchableOpacity>}
            />
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
    color: 'rgb(27,255,0)',
    fontWeight: 'bold',
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
    fontSize: 17,
    color: 'rgb(27,255,0)',
    fontWeight: 'bold',
    lineHeight: 24,
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
