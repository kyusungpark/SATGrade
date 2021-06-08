import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import firebase from '../config/firebase';

// should not be able to go back to authStack when logged in
const SecretScreen = ({ navigation }) => {
	//! use state
	//! WHY ? after currentUser
	const user = firebase.auth().currentUser?.displayName;

	const handleSignOut = async () => {
		try {
			await firebase.auth().signOut();
			// HANDLE: WHEN signed out go to login Screen
			navigation.navigate('SignUp');
			console.log('User Signed Out');
		} catch (e) {
			console.error(e.code);
			console.error(e.message);
		}
	};

	// useEffect(() => {

	// 	console.log(user.displayName);
	// 	setName(name);
	// }, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.text}>
				<Text>Welcome</Text>
				<Text>{user}</Text>
				<Button title='sign out' onPress={handleSignOut} />
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

export default SecretScreen;
