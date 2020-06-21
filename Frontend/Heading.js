import React, { Component } from 'react';
import { Image,  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/download.jpg';

class Heading extends Component {
    render() {
        return (
            <View style = {styles.container}>
              <Image source={logo} style={styles.img} /> 
                <Text style = {{textAlign:'center', fontSize:25, marginTop:-33}}>Covid War</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    borderRadius: 8,
  },

  img: {
    width: 50,
    height: 52,
  }
});

export default Heading;