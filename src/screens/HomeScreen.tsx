import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { CenterSafeAreaView } from '../components';
import { State } from '../state';
import firebase from '../config/firebase';

const HomeScreen = () => {
	// const name = useSelector((state: State) => state.auth.name); // FIX doesn't work sometimes
	const name = firebase.auth().currentUser?.displayName;

	return (
		<CenterSafeAreaView>
			<Text>Welcome</Text>
			<Text>{name}</Text>
		</CenterSafeAreaView>
	);
};

export default HomeScreen;
