import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from '../config/firebase';

import AppButton from '../components/AppButton';

const ProfileScreen = () => {
	// const user = firebase.auth().currentUser;

	const handleSignOut = async () => {
		try {
			await firebase.auth().signOut();
		} catch (e) {
			console.error(e.message);
		}
	};
	return (
		<View style={styles.container}>
			<Text>Profile</Text>
			<AppButton title='Sign out' onPress={handleSignOut} />
		</View>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: 'white',
		color: 'red',
	},
});
