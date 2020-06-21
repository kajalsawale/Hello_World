import React, { Component } from 'react';
import { Image,  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Header} from 'react-native-elements';
import home from './assets/home.png';

class MyHeader extends Component
{
    render() {
        return (
            <Header
            leftComponent={{ icon:{home}, color: '#fff' }}
            centerComponent={{ text: 'COVID-19 ', style: { color: '#fff' } }}
            rightComponent={{ color: '#fff' }}
          />
        );
    }
}

export default MyHeader;

