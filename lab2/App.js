import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
	constructor(props) {
    	super(props);
		this.onPress = this.onPress.bind(this);
		this.state = {value: ''};
		this.name = {value: ''};
    	this.submitted = false;
		this.viable = false;

		this.onChange = this.onChange.bind(this);
  	}
  	onChange(event) {
		//console.log(event);
		this.state = {value: event};
  	}
  
  	onPress(event) {
		//console.log("Pressed");
		this.submitted = true;
		//console.log(this.state);
		//console.log(this.submitted);
		const tester = /^[a-zA-Z\s]*$/;

		if((tester.test(this.state.value))==false){
			this.viable = false;
		}
		else{
			this.viable = true;
		}
		//console.log(this.viable);
		//console.log(this.state);
		event.preventDefault;
		//console.log(this.state);
		this.name = this.state.value;
		this.setState({state: this.state});
		//console.log(this.state);
	}
	
  	render() {		
		const displayQ = this.submitted;
		const displayName = this.viable;
		//console.log(this.name);

		if(displayQ == true){
			if(displayName == false){
				//console.log("Display Wrong");
				return (
					<View style={styles.container} flexDirection="column" alignItems='stretch'>
						<View><TextInput style={styles.textInput} onChangeText={this.onChange} placeholder="Enter your name"></TextInput></View>
						<TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
						<Text style={styles.youreWrong}>Please use only letters and spaces</Text>
					</View>
				);
			}
			else if(displayName == true){
				//console.log("Display Name");
				//console.log(this.name.value);
				return (
					<View style={styles.container} flexDirection="column" alignItems='stretch'>
						<Text style={styles.worksFine}>{'Hi '}{this.name}</Text>
					</View>
				);
			}
		}
		else if(displayQ == false){
			//console.log("Display Question")
			return (
				<View style={styles.container} flexDirection="column" alignItems='stretch'>
				<View><TextInput style={styles.textInput} onChangeText={this.onChange} placeholder="Enter your name"></TextInput></View>
				<TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
				</View>
			);
		}
  	}
}

const styles = StyleSheet.create({
	buttonText:
	{
    	color:"white",
    	fontSize:40
  	},
  	buttonStyle:
  	{
    	justifyContent: 'center',
    	alignItems: 'center',
    	backgroundColor: '#EC4DCD',
	    height:75,
		margin:30,
		borderRadius:15,
  	},
  	textInput:
  	{
    	margin:30,
    	height:75,
		fontSize:20,
		backgroundColor:'black',
		color: 'white',
  	},
  	defaultText:
  	{
		fontSize:20,
  	},
  	container: {
 		flex: 1,
    	backgroundColor: '#FFC0F3',
    	alignItems: 'center',
    	justifyContent: 'center',
  	},
  	youreWrong: {
		color: 'red',
		fontSize: 20,
	},
	worksFine: {
		color: 'black',
		fontSize: 20,
	}  
});