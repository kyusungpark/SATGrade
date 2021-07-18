import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type GradeParams = {
	ACT: undefined;
	CheckAK: undefined;
	GradeHome: undefined;
	SAT: undefined;
	Scantron: undefined;
};

export type GradeNavProps<T extends keyof GradeParams> = {
	navigation: StackNavigationProp<GradeParams, T>;
	// route: RouteProp<GradeParams, T>;
};
