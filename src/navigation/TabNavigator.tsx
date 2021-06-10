import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import {
	HomeScreen,
	ProfileScreen,
	RankingsScreen,
	StatsScreen,
} from '../screens';

import GradeNavigator from './GradeNavigator';

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigation = () => {
	return (
		<Navigator
			initialRouteName='Home'
			screenOptions={screenOptions}
			tabBarOptions={tabBarOptions}
		>
			<Screen name='Grade' component={GradeNavigator} />
			<Screen name='Ranking' component={RankingsScreen} />
			<Screen name='Home' component={HomeScreen} />
			<Screen name='Stats' component={StatsScreen} />
			<Screen name='Profile' component={ProfileScreen} />
		</Navigator>
	);
};

export default TabNavigation;

const screenOptions = ({ route }) => ({
	tabBarIcon: ({ focused, color, size }) => {
		let icon;

		if (route.name === 'Home') {
			icon = focused ? 'information-circle' : 'information-circle-outline';
		} else if (route.name === 'Profile') {
			icon = focused ? 'ios-list' : 'list';
		} else if (route.name === 'Ranking') {
			icon = focused ? 'star' : 'star-outline';
		} else if (route.name === 'Stats') {
			icon = focused ? 'stats-chart' : 'stats-chart-outline';
		} else if (route.name === 'Grade') {
			icon = focused ? 'pencil' : 'pencil-outline';
		}

		return <Ionicons name={icon} size={size} color={color} />;
	},
});

const tabBarOptions = {
	activeTintColor: '#555555',
	inactiveTintColor: 'gray',
};