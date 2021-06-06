import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SecretScreen } from '../screens';

const Stack = createStackNavigator();

const AppNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Secret' component={SecretScreen} />
		</Stack.Navigator>
	);
};

export default AppNavigation;
