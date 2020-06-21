import React from 'react';
import { Image,  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/login.png';
import styles from './styles'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const users = [
	{
	   name: 'brynn',
	   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
	}
   ]
export default function App() {
  return (
    <View style={styles.container}>

	
	   
	
	   <Card title="CARD WITH DIVIDER">
		 {
		   users.map((u, i) => {
			 return (
			   <View key={i} style={styles.user}>
				 <Image
				   style={styles.image}
				   resizeMode="cover"
				   source={{ uri: u.avatar }}
				 />
				 <Text style={styles.name}>{u.name}</Text>
			   </View>
			 );
		   })
		 }
	   </Card>
	   
		<Card containerStyle={{padding: 0}} >
		 {
		   users.map((u, i) => {
			 return (
			   <ListItem
				 key={i}
				 roundAvatar
				 title={u.name}
				 avatar={{uri:u.avatar}}
			   />
			 );
		   })
		 }
	   </Card>
	   
	   
	   <Card
		 title='HELLO WORLD'
		 image source = {logo}>
		 <Text style={{marginBottom: 10}}>
		   The idea with React Native Elements is more about component structure than actual design.
		 </Text>
		 <Button
		   icon={<Icon name='code' color='#ffffff' />}
		   buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
		   title='VIEW NOW' />
	   </Card>
	   </View>
  );
}


