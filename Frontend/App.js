import React from 'react';
import { Image,  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Heading from './Heading.js'
export default function App() {
  return (
    <View>
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
  },
});