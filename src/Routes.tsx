import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActivityIndicator, StyleSheet } from 'react-native';

import AuthNavigation from './navigation/AuthNavigator';
import firebase from './config/firebase';
import TabNavigation from './navigation/TabNavigator';
import { authActionCreator, State } from './state';
import { Center } from './components';

const Routes = () => {
	const dispatch = useDispatch();
	const { setUserStatus } = bindActionCreators(authActionCreator, dispatch);
	const user = useSelector((state: State) => state.auth.user);

	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const unsubsribe = firebase.auth().onAuthStateChanged(user => {
			setUserStatus(user);
			setLoading(false);
		});

		// handle memory leak
		return () => {
			unsubsribe();
		};
	}, []);

	if (loading) {
		return (
			<Center style={[styles.container, styles.horizontal]}>
				<ActivityIndicator size='large' color='#555555' />
			</Center>
		);
	}

	return (
		<NavigationContainer>
			{user ? <TabNavigation /> : <AuthNavigation />}
		</NavigationContainer>
	);
};

export default Routes;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10,
	},
});
