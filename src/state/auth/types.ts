import { ActionType } from './actionType';

interface LogInAction {
	type: ActionType.LOG_IN;
	payload: {
		email: string | null;
		password: string | null;
	};
}

interface SignOutAction {
	type: ActionType.SIGN_OUT;
}

interface SignUpAction {
	type: ActionType.SIGN_UP;
	payload: {
		name: string | null;
		email: string | null;
		password: string | null;
		confirmPassword: string | null;
	};
}

export type Types = LogInAction | SignOutAction | SignUpAction;
