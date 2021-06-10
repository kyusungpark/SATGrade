import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';

const { Navigator, Screen } = createStackNavigator();

const AppNavigation = () => {
	return (
		<Navigator screenOptions={screenOptions} initialRouteName='Tab'>
			<Screen name='Tab' component={TabNavigator} />
		</Navigator>
	);
};

export default AppNavigation;

const screenOptions = {
	headerShown: false,
};
