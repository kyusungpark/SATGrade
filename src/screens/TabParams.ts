import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

export type TabParams = {
	Grade: undefined;
	Ranking: undefined;
	Home: undefined;
	Stats: undefined;
	Profile: undefined;
};

export type TabNavProps<T extends keyof TabParams> = {
	navigation: BottomTabNavigationProp<TabParams, T>;
	route: RouteProp<TabParams, T>;
};
