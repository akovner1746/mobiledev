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
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

const rides = 
[
  {
    key: 'ass',
    title: 'Alien Space Spinners',
    isfave: false,
    park: 'dhs',
    image: require('../assets/images/ass.jpg')
  },
  {
    key: 'astro',
    title: 'Astro Orbiter',
    isfave: false,
    park: 'mk',
    image: require('../assets/images/astroorbiter.jpg')
  },
  {
    key: 'barnstormer',
    title: 'Barnstormer',
    isfave: false,
    park: 'mk',
    image: require('../assets/images/barnstormer.jpg')
  },
  {
    key: 'bigthunder',
    title: 'Big Thunder Mountain Railroad',
    isfave: false,
    park: 'mk',
    image: require('../assets/images/thunder.jpg')
  },
  {
    key: 'buzz',
    title: 'Buzz Lightyear Space Ranger Spin',
    isfave: false,
    park: 'mk',
    image: require('../assets/images/buzz.jpg')
  },
  {
    key: 'carouselofprogress',
    title: 'Carousel of Progress',
    isfave: false,
    park: 'mk',
    image: require('../assets/images/carouselofprogress.jpg')
  },
  {
    key: 'dinosaur',
    title: 'Dinosaur',
    isfave: false,
    park: 'mk',
    image: require('../assets/images/dinosaur.jpg')
  },
  {
    key: 'dumbo',
    title: 'Dumbo',
    isfave: false,
    park: 'mk',
    image: require('../assets/images/dumbo.jpg')
  },
  {
    key: 'everest',
    title: 'Expedition Everest Legend of the Forbidden Mountain',
    isfave: false,
    park: 'mk',
    image: require('../assets/images/everest.jpg')
  },
  {
    key: 'fop',
    title: 'Flight of Passage',
    isfave: false,
    park: 'dak',
    image: require('../assets/images/fop.jpg')
  },
  {
    key: 'frozen',
    title: 'Frozen Ever After',
    isfave: false,
    park: 'ec',
    image: require('../assets/images/frozen.jpg')
  },
  {
    key: 'granfiesta',
    title: 'Gran Fiesta Tour featuring the Three Cabilleros',
    isfave: false,
    park: 'ec',
    image: require('../assets/images/granfiesta.jpg')
  },
  {
    key: 'hauntedmansion',
    title: 'The Haunted Mansion',
    isfave: false,
    park: 'mk',
    image: require('../assets/images/mansion.jpg')
  },
  {
    key: 'smallworld',
    title: 'its a small world',
    isfave: false,
    park: 'mk',
    image: require('../assets/images/smallworld.jpg')
  },
  {
    key: 'imgination',
    title: 'Journey Into Your Imagination! with Figment',
    isfave: false,
    park: 'ec',
    image: require('../assets/images/figment.jpg')
  },
  {
    key: 'junglecruise',
    title: 'The Jungle Cruise',
    isfave: false,
    park: 'mk',
    image: require('../assets/images/junglecruise.jpg')
  },
  {
    key: 'kali',
    title: 'Kali River Rapids',
    isfave: false,
    park: 'dak',
    image: require('../assets/images/kali.jpg')
  }
  ]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props){
    super(props);
    this.onPressShowFav = this.onPressShowFav.bind(this);
    this.onPressShowAll = this.onPressShowAll.bind(this);
    this.onPressShowMK = this.onPressShowMK.bind(this);
    this.onPressShowEC = this.onPressShowEC.bind(this);
    this.onPressShowDHS = this.onPressShowDHS.bind(this);
    this.onPressShowDAK = this.onPressShowDAK.bind(this);
    this.favview = false;
    this.park = 'all';
  }
  _gotoScreen = (key) => {
    console.log("Going to " + key);
  }
  onPressShowFav(event){
    this.favview = true;
    this.park = 'all';
    console.log(this.favview);
    this.setState({ state: this.state });
  }
  onPressShowAll(event){
    this.favview = false;
    this.park = 'all';
    console.log(this.favview);
    this.setState({ state: this.state });
  }
  onPressShowMK(event){
    this.park = 'mk';
    this.favview = false;
    console.log(this.park);
    this.setState({ state: this.state });
  }
  onPressShowEC(event){
    this.park = 'ec';
    this.favview = false;
    console.log(this.park);
    this.setState({ state: this.state });
  }
  onPressShowDHS(event){
    this.park = 'dhs';
    this.favview = false;
    console.log(this.park);
    this.setState({ state: this.state });
  }
  onPressShowDAK(event){
    this.park = 'dak';
    this.favview = false;
    console.log(this.park);
    this.setState({ state: this.state });
  }
  makeFave(item){
    item.isfave = !item.isfave;
  }
  render() {
    const {navigate} = this.props.navigation;
    if(this.park == 'all'){
      if(this.favview == false){
        return (
          <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              <View style={styles.getStartedContainer}>
                <Text style={styles.getStartedText}>Disney World Attractions</Text>
                <Button onPress={this.onPressShowFav} title="Sort By Favorites"/>
                <Button onPress={this.onPressShowMK} title="Magic Kingdom"/>
                <Button onPress={this.onPressShowEC} title="Epcot"/>
                <Button onPress={this.onPressShowDHS} title="Hollywood Studios"/>
                <Button onPress={this.onPressShowDAK} title="Animal Kingdom"/>
                <FlatList
                data={rides}
                keyExtractor={this._keyExtractor}
                  renderItem={({item}) => <TouchableOpacity
                      onPress={(event) => 
                      { 
                        navigate("Detail",{
                          title:item.title,
                          image:item.image})
                      }
                      }>
                      <Text>{item.title}</Text>
                      <Button onPress={this.makeFave} title="<3"/>
                      <Image source={item.image} style={{
                      width:300,height:250,
                      resizeMode:"contain"}} />
                    </TouchableOpacity>}
                />
              </View>
            </ScrollView>
          </View>
        );
      }
      else if(this.favview == true){
        return (
          <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              <View style={styles.getStartedContainer}>
                <Text style={styles.getStartedText}>Disney World Attractions</Text>
                <Button onPress={this.onPressShowAll} title="Sort Normally"/>
                <FlatList
                data={rides.filter(item => item.isfave == true)}
                keyExtractor={this._keyExtractor}
                  renderItem={({item}) => <TouchableOpacity
                      onPress={(event) => 
                      { 
                        navigate("Detail",{
                          title:item.title,
                          image:item.image,
                          favorite:item.isfave})
                      }
                      }>
                      <Text>{item.title}</Text>
                      <Image source={item.image} style={{
                      width:300,height:250,
                      resizeMode:"contain"}} />
                    </TouchableOpacity>}
                />
                <FlatList
                data={rides.filter(item => item.isfave == false)}
                keyExtractor={this._keyExtractor}
                  renderItem={({item}) => <TouchableOpacity
                      onPress={(event) => 
                      { 
                        navigate("Detail",{
                          title:item.title,
                          image:item.image,
                          favorite:item.isfave})
                      }
                      }>
                      <Text>{item.title}</Text>
                      <Image source={item.image} style={{
                      width:300,height:250,
                      resizeMode:"contain"}} />
                    </TouchableOpacity>}
                />
              </View>
            </ScrollView>
          </View>
        );
      }
    }
    else if(this.park == 'mk'){
      return (
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.getStartedContainer}>
              <Text style={styles.getStartedText}>Disney World Attractions</Text>
              <Button onPress={this.onPressShowAll} title="All Parks"/>
              <Button onPress={this.onPressShowMK} title="Magic Kingdom"/>
              <Button onPress={this.onPressShowEC} title="Epcot"/>
              <Button onPress={this.onPressShowDHS} title="Hollywood Studios"/>
              <Button onPress={this.onPressShowDAK} title="Animal Kingdom"/>
              <FlatList
              data={rides.filter(item => item.park=="mk")}
              keyExtractor={this._keyExtractor}
                renderItem={({item}) => <TouchableOpacity
                    onPress={(event) => 
                    { 
                      navigate("Detail",{
                        title:item.title,
                        image:item.image})
                    }
                    }>
                    <Text>{item.title}</Text>
                    <Button onPress={this.makeFave} title="<3"/>
                    <Image source={item.image} style={{
                    width:300,height:250,
                    resizeMode:"contain"}} />
                  </TouchableOpacity>}
              />
            </View>
          </ScrollView>
        </View>
      );
    }
    else if(this.park == 'ec'){
      return(
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.getStartedContainer}>
              <Text style={styles.getStartedText}>Disney World Attractions</Text>
              <Button onPress={this.onPressShowAll} title="All Parks"/>
              <Button onPress={this.onPressShowMK} title="Magic Kingdom"/>
              <Button onPress={this.onPressShowEC} title="Epcot"/>
              <Button onPress={this.onPressShowDHS} title="Hollywood Studios"/>
              <Button onPress={this.onPressShowDAK} title="Animal Kingdom"/>
              <FlatList
              data={rides.filter(item => item.park=="ec")}
              keyExtractor={this._keyExtractor}
                renderItem={({item}) => <TouchableOpacity
                    onPress={(event) => 
                    { 
                      navigate("Detail",{
                        title:item.title,
                        image:item.image})
                    }
                    }>
                    <Text>{item.title}</Text>
                    <Button onPress={this.makeFave} title="<3"/>
                    <Image source={item.image} style={{
                    width:300,height:250,
                    resizeMode:"contain"}} />
                  </TouchableOpacity>}
              />
            </View>
          </ScrollView>
        </View>
      );
    }
    else if(this.park == 'dhs'){
      return(
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.getStartedContainer}>
              <Text style={styles.getStartedText}>Disney World Attractions</Text>
              <Button onPress={this.onPressShowAll} title="All Parks"/>
              <Button onPress={this.onPressShowMK} title="Magic Kingdom"/>
              <Button onPress={this.onPressShowEC} title="Epcot"/>
              <Button onPress={this.onPressShowDHS} title="Hollywood Studios"/>
              <Button onPress={this.onPressShowDAK} title="Animal Kingdom"/>
              <FlatList
              data={rides.filter(item => item.park=="dhs")}
              keyExtractor={this._keyExtractor}
                renderItem={({item}) => <TouchableOpacity
                    onPress={(event) => 
                    { 
                      navigate("Detail",{
                        title:item.title,
                        image:item.image})
                    }
                    }>
                    <Text>{item.title}</Text>
                    <Button onPress={this.makeFave} title="<3"/>
                    <Image source={item.image} style={{
                    width:300,height:250,
                    resizeMode:"contain"}} />
                  </TouchableOpacity>}
              />
            </View>
          </ScrollView>
        </View>
      );
    }
    else if(this.park == 'dak'){
      return(
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.getStartedContainer}>
              <Text style={styles.getStartedText}>Disney World Attractions</Text>
              <Button onPress={this.onPressShowAll} title="All Parks"/>
              <Button onPress={this.onPressShowMK} title="Magic Kingdom"/>
              <Button onPress={this.onPressShowEC} title="Epcot"/>
              <Button onPress={this.onPressShowDHS} title="Hollywood Studios"/>
              <Button onPress={this.onPressShowDAK} title="Animal Kingdom"/>
              <FlatList
              data={rides.filter(item => item.park=="dak")}
              keyExtractor={this._keyExtractor}
                renderItem={({item}) => <TouchableOpacity
                    onPress={(event) => 
                    { 
                      navigate("Detail",{
                        title:item.title,
                        image:item.image})
                    }
                    }>
                    <Text>{item.title}</Text>
                    <Button onPress={this.makeFave} title="<3"/>
                    <Image source={item.image} style={{
                    width:300,height:250,
                    resizeMode:"contain"}} />
                  </TouchableOpacity>}
              />
            </View>
          </ScrollView>
        </View>
      );
    }
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
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
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
