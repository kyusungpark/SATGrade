import { AuthTypes, AuthState, AuthActionType } from './authTypes';

const initialState = {
	error: null,
	user: null,
	name: '',
};

export default (state: AuthState = initialState, action: AuthTypes) => {
	switch (action.type) {
		case AuthActionType.AUTH_FAIL: {
			return {
				...state,
				error: action.payload.error, // DO handle error
			};
		}

		case AuthActionType.LOG_IN: {
			return {
				...state,
				name: action.payload.name,
				user: action.payload.user,
			};
		}

		case AuthActionType.SET_USER_STATUS: {
			return {
				...state,
				user: action.payload.user,
			};
		}

		case AuthActionType.SIGN_OUT: {
			return {
				...state,
				name: null,
				user: null,
			};
		}

		case AuthActionType.SIGN_UP: {
			return {
				...state,
				name: action.payload.name,
				user: action.payload.user,
			};
		}

		default: {
			return state;
		}
	}
};
