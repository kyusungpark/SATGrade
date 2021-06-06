import { StatusBar } from 'expo-status-bar';
import React, { FC, useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './src/navigation/AppNavigation';
import AuthNavigation from './src/navigation/AuthNavigation';

// render Auth or App depending on whether user is logged in or not

const App: FC = () => {
	const [user, setUser] = useState<boolean>(false);

	return (
		<NavigationContainer>
			{user ? <AppNavigation /> : <AuthNavigation />}
		</NavigationContainer>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
