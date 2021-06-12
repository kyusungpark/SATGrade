import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import firebase from '../config/firebase';

//! types

const HomeScreen = () => {
  // does not render when new sign up
	//? WHY ? after currentUser
	const user = firebase.auth().currentUser?.displayName;

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.text}>
				<Text>Welcome</Text>
				<Text>{user}</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		alignItems: 'center',
	},
});

export default HomeScreen;
