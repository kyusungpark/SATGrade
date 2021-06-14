import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';

const reducers = combineReducers({
	auth: authReducer,
});

export type State = ReturnType<typeof reducers>;

export default reducers;
