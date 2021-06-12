import { ActionType } from './actionType';
import { Types } from './types';

//! types for initial state

const initialState = {
	user: null,
	isLoggedIn: false,
	error: null,
};

export default (state = initialState, action: Types) => {
	switch (action.type) {
		case ActionType.SIGN_UP: {
			return {
				...state,
				isLoggedIn: false,
			};
		}

		case ActionType.SIGN_OUT: {
			return {
				...state,
				isLoggedIn: true,
			};
		}

		case ActionType.LOG_IN: {
			return {
				...state,
				isLoggedIn: true,
			};
		}

		default: {
			return state;
		}
	}
};
