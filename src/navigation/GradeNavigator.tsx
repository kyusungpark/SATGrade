import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CheckAKScreen, GradeHomeScreen, GradeScreen } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const GradeNavigation = () => {
	return (
		<Navigator initialRouteName='GradeHome' screenOptions={screenOptions}>
			<Screen name='GradeHome' component={GradeHomeScreen} />
			<Screen name='CheckAK' component={CheckAKScreen} />
			<Screen name='Scantron' component={GradeScreen} />
		</Navigator>
	);
};

export default GradeNavigation;

const screenOptions = {
	headerShown: false,
};
