import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import firebase from '../config/firebase';

type Props = {
	navigation: any;
};

// should not be able to go back to authStack when logged in
const HomeScreen = ({ navigation }: Props) => {
	//? WHY ? after currentUser
	const user = firebase.auth().currentUser?.displayName;

	//! HANDLE: WHEN signed out go to login Screen
	//! NEED TO NAVIGATE TO AUTHSTACK
	const handleSignOut = async () => {
		try {
			await firebase.auth().signOut();
			navigation.navigate('LogIn'); //! here
			console.log('User Signed Out');
		} catch (e) {
			console.error(e.message);
		}
	};

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

export default HomeScreen;
