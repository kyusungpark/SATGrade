import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { CenterSafeAreaView } from '../components';
import { State } from '../state';

const HomeScreen = () => {
	const name = useSelector((state: State) => state.auth.name); // FIX types

	return (
		<CenterSafeAreaView>
			<Text>Welcome</Text>
			<Text>{name}</Text>
		</CenterSafeAreaView>
	);
};

export default HomeScreen;
