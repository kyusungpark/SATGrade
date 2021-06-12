import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './src/navigation/AppNavigator';
import AuthNavigation from './src/navigation/AuthNavigator';
import firebase from './src/config/firebase';

import { Provider } from 'react-redux';
import store from './src/store';

//! add pending status icon when logging in and out
// use <ActivityIndicator/> built in component

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	//? keep useEffect?
	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
		});
	}, []);

	return (
		<Provider store={store}>
			<NavigationContainer>
				{isLoggedIn ? <AppNavigation /> : <AuthNavigation />}
			</NavigationContainer>
		</Provider>
	);
};

export default App;
