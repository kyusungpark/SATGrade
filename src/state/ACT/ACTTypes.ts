export enum ACTActionTypes {
	ADD_AK = 'ADD_AK',
	GET_AK_SCALE = 'GET_AK_SCALE',
	GET_ANALYSIS = 'GET_ANALYSIS',
	GRADE_INPUT = 'GRADE_INPUT',
	GRADE_TEST = 'GRADE_TEST',
	SUBMIT_TEST = 'SUBMIT_TEST',
}

export interface ACTState {
	testID: string;
	testDate: Date;
	answerKey: string[];
	inputAnswers: string[];
}
