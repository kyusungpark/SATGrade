import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CheckAKScreen, GradeHomeScreen, ScantronScreen } from '../screens';
import { GradeParams } from '../screens/gradeScreens/GradeParams';

const { Navigator, Screen } = createStackNavigator<GradeParams>();

const GradeNavigation = () => {
	return (
		<Navigator initialRouteName='GradeHome' screenOptions={screenOptions}>
			<Screen name='GradeHome' component={GradeHomeScreen} />
			<Screen name='CheckAK' component={CheckAKScreen} />
			<Screen name='Scantron' component={ScantronScreen} />
		</Navigator>
	);
};

export default GradeNavigation;

const screenOptions = {
	headerShown: false,
};
