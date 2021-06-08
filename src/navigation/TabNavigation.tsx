import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { DashboardScreen, GradeScreen, HomeScreen } from '../screens';
import DrawerNavigation from './DrawerNavigation';

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigation = () => {
	return (
		<Navigator initialRouteName='Home'>
			<Screen name='Grade' component={GradeScreen} />
			<Screen name='Home' component={DrawerNavigation} />
			<Screen name='Dashboard' component={DashboardScreen} />
		</Navigator>
	);
};

export default TabNavigation;
