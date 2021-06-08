import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeScreen } from '../screens';

const { Navigator, Screen } = createDrawerNavigator();

const DrawerNavigation = () => {
	return (
		<Navigator drawerType='front'>
			<Screen name='Home' component={HomeScreen} />
		</Navigator>
	);
};

export default DrawerNavigation;
