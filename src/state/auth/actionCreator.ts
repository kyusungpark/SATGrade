import { ActionType } from './actionType';
import { Dispatch } from 'redux';
import { Types } from './types';

//! types - how to clean up

export const LogIn = (email: string | null, password: string | null) => {
	return (dispatch: Dispatch<Types>) => {
		dispatch({
			type: ActionType.LOG_IN,
			payload: {
				email,
				password,
			},
		});
	};
};

export const SignOut = () => {
	return (dispatch: Dispatch<Types>) => {
		dispatch({
			type: ActionType.SIGN_OUT,
		});
	};
};

export const SignUp = (
	name: string | null,
	email: string | null,
	password: string | null,
	confirmPassword: string | null
) => {
	return (dispatch: Dispatch<Types>) => {
		dispatch({
			type: ActionType.SIGN_UP,
			payload: {
				name,
				email,
				password,
				confirmPassword,
			},
		});
	};
};
