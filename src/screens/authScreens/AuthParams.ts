import { StackNavigationProp } from '@react-navigation/stack';

export type AuthParams = {
	SignUp: undefined;
	LogIn: undefined;
	Landing: undefined;
};

export type AuthNavProps<T extends keyof AuthParams> = {
	navigation: StackNavigationProp<AuthParams, T>;
};
