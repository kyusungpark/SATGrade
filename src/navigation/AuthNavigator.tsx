import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LandingScreen, LogInScreen, SignUpScreen } from '../screens';
import { AuthParams } from '../screens/authScreens/AuthParams';

const { Navigator, Screen } = createStackNavigator<AuthParams>();

const AuthNavigation = () => {
	return (
		<Navigator initialRouteName='Landing' screenOptions={screenOptions}>
			<Screen name='Landing' component={LandingScreen} />
			<Screen name='SignUp' component={SignUpScreen} />
			<Screen name='LogIn' component={LogInScreen} />
		</Navigator>
	);
};

export default AuthNavigation;

const screenOptions = {
	headerShown: false,
};
