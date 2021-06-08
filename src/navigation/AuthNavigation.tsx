import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LandingScreen, LogInScreen, SignUpScreen } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const screenOptions = {
	headerShown: false,
};

const AuthNavigation = () => {
	return (
		<Navigator initialRouteName='LandingScreen' screenOptions={screenOptions}>
			<Screen name='Landing' component={LandingScreen} />
			<Screen name='SignUp' component={SignUpScreen} />
			<Screen name='LogIn' component={LogInScreen} />
		</Navigator>
	);
};

export default AuthNavigation;
