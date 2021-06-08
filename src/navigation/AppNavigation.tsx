import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeScreen } from '../screens';
import DrawerNavigation from './DrawerNavigation';
import TabNavigation from './TabNavigation';

const { Navigator, Screen } = createStackNavigator();
// const { Navigator, Screen } = createBottomTabNavigator();
// const { Navigator, Screen } = createDrawerNavigator();

const AppNavigation = () => {
	return (
		<Navigator>
			{/* <Screen name='Home' component={HomeScreen} /> */}
			<Screen name='Tab' component={TabNavigation} />
			<Screen name='Drawer' component={DrawerNavigation} />
		</Navigator>
	);
};

export default AppNavigation;
