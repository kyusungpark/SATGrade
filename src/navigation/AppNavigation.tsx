import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './TabNavigation';

const screenOptions = {
	headerShown: false,
};

const { Navigator, Screen } = createStackNavigator();

const AppNavigation = () => {
	return (
		<Navigator screenOptions={screenOptions}>
			<Screen name='Tab' component={TabNavigation} />
		</Navigator>
	);
};

export default AppNavigation;
