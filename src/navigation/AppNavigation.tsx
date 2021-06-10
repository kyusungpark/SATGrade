import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './TabNavigation';
import { LogInScreen } from '../screens';

const screenOptions = {
	headerShown: false,
};

const { Navigator, Screen } = createStackNavigator();

const AppNavigation = () => {
	return (
		<Navigator screenOptions={screenOptions} initialRouteName='Tab'>
			<Screen name='Tab' component={TabNavigation} />
			{/* <Screen name='LogIn' component={LogInScreen} /> */}
		</Navigator>
	);
};

export default AppNavigation;
