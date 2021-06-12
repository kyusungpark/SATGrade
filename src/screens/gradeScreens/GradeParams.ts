import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type GradeParams = {
	GradeHome: undefined;
	CheckAK: undefined;
	Scantron: undefined;
};

export type GradeNavProps<T extends keyof GradeParams> = {
	navigation: StackNavigationProp<GradeParams, T>;
	// route: RouteProp<GradeParams, T>;
};
