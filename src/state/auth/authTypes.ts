export enum AuthActionType {
	AUTH_FAIL = 'AUTH_FAIL',
	LOG_IN = 'LOG_IN',
	SET_USER_STATUS = 'SET_USER_STATUS',
	SIGN_OUT = 'SIGN_OUT',
	SIGN_UP = 'SIGN_UP',
}

export interface AuthState {
	name: string;
	user: object | null;
	error: any;
}

interface AuthFail {
	type: AuthActionType.AUTH_FAIL;
	payload: {
		error: any; // NOTE don't know how it will be
	};
}

interface LogInAction {
	type: AuthActionType.LOG_IN;
	payload: {
		name: string;
		user: object | null;
	};
}

interface setUserStatus {
	type: AuthActionType.SET_USER_STATUS;
	payload: {
		user: object | null;
	};
}

interface SignOutAction {
	type: AuthActionType.SIGN_OUT;
}

interface SignUpAction {
	type: AuthActionType.SIGN_UP;
	payload: {
		name: string;
		user: object | null;
	};
}

export type AuthTypes =
	| AuthFail
	| LogInAction
	| setUserStatus
	| SignOutAction
	| SignUpAction;
