import React from 'react';
import { Image,  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/login.png';

export default function App() {
  return (
    <View style={styles.container}>
	<Image source={logo} style={styles.login} />
	  <Text> Login Id : </Text>
	  <Text> Password : </Text>
	  <TouchableOpacity 
	  onPress={ () => alert('Login Successful')} style={styles.button}>
	  <Text style={styles.buttonText}>Login</Text>
	  </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
	login: {
		width: 100,
		height: 100,
		marginTop: 50,
	},
	
	button: {
		backgroundColor: "green",
		padding: 20,
		borderRadius: 5,
	},
	
	buttonText:{
		fontSize: 20,
		color: '#fff',
	},
});
