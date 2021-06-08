import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './src/navigation/AppNavigation';
import AuthNavigation from './src/navigation/AuthNavigation';
import firebase from './src/config/firebase';

//! GIT IGNORE FIREBASE
const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	// do I use this?
	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				setIsLoggedIn(true);
				console.log('LOGGED IN');
			} else {
				console.log('NOT LOGGED IN');
			}
		});
	}, [isLoggedIn]);

	return (
		<NavigationContainer>
			{isLoggedIn ? <AppNavigation /> : <AuthNavigation />}
		</NavigationContainer>
	);
};

export default App;
