import React, { Component } from 'react';
import { Image,  StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class Heading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style = {{ fontSize : 20,
                    marginVertical:15,}}>Covid War</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});

export default Heading;