import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import {
	GradeScreen,
	HomeScreen,
	ProfileScreen,
	RankingsScreen,
	StatsScreen,
} from '../screens';

// const screenOptions = ({route}) => {
//   tabBaricon: ({ focused, color, size }) => {
//     let iconName;

//     if (route.name === 'Home') {
//       iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
//     } else if (route.name === 'Settings') {
//       iconName = focused ? 'ios-list-bos' : 'ios-list';
//   }

//     return <Ionicons name={iconName } size={size} color={color} />
// }

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigation = () => {
	return (
		<Navigator
			initialRouteName='Home'
			screenOptions={screenOptions}
			tabBarOptions={tabBarOptions}
		>
			<Screen name='Grade' component={GradeScreen} />
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
