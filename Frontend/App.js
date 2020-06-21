import React from 'react';
import { Image,  StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Heading from './Heading'; 

export default function App() {
  return (
    <View style={{flex:1, padding:5 }}>
		<Heading/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',  
	justifyContent: 'center',
	margin: 0,
  },
  
});
