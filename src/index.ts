import { combineReducers } from 'redux';

import authReducer from './state/auth/authReducer';

const reducers = combineReducers({
	auth: authReducer,
});

export default reducers;