import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
	HomeScreen,
	LogInScreen,
	SecretScreen,
	SignUpScreen,
} from '../screens';

const Stack = createStackNavigator();

const screenOptions = {
	headerShown: false,
};

//! DO I NEED SECRET HERE? SHOULD GO TO AppNavigation */
const AuthNavigation: FC = () => {
	return (
		<Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='SignUp' component={SignUpScreen} />
			<Stack.Screen name='LogIn' component={LogInScreen} />
			{/* <Stack.Screen name='Secret' component={SecretScreen} /> */}
		</Stack.Navigator>
	);
};

export default AuthNavigation;
