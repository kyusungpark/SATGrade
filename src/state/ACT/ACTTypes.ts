export enum ACTActionType {
	ADD_AK = 'ADD_AK',
	ADD_SCALE = 'ADD_SCALE',
	GET_AK = 'GET_AK',
	GET_ANALYSIS = 'GET_ANALYSIS',
	GET_SCALE = 'GET_SCALE',
	GRADE_INPUT = 'GRADE_INPUT',
	GRADE_TEST = 'GRADE_TEST',
	SUBMIT_TEST = 'SUBMIT_TEST',
}

export interface ACTState {
	testID: string;
	testDate: Date | null;
	studentAnswers: string[];
	testAnswers: string[];
}

interface ACTAddAK {
	type: ACTActionType.ADD_AK;
	payload: {
	};
}

interface ACTAddScale {
	type: ACTActionType.ADD_SCALE;
	payload: {
	};
}

interface ACTGetAK {}

interface ACTGetAnalysis {}

interface ACTGetScale {}

interface ACTGradeInput {}

interface ACTGradeTest {}

interface ACTSubmitTest {}

export type ACTTypes = ACTAddAK;
