import { ACTActionType, ACTState, ACTTypes } from './ACTTypes';

const initialState = {
	testID: '',
	testDate: null,
	studentAnswers: [],
	testAnswers: [],
};

export default (state: ACTState = initialState, action: ACTTypes) => {
	switch (action.type) {
		case ACTActionType.ADD_AK: {
			return state;
		}

		default: {
			return state;
		}
	}
};
