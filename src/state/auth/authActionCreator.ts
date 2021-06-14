import firebase from 'firebase';
import { Dispatch } from 'redux';
import { AuthTypes, AuthActionType } from './authTypes';

export default {
	logIn: (email: string, password: string) => {
		return async (dispatch: Dispatch<AuthTypes>) => {
			try {
				await firebase
					.auth()
					.signInWithEmailAndPassword(email.trim(), password.trim());

				const user = firebase.auth().currentUser;
				const name = firebase.auth().currentUser?.displayName;

				dispatch({
					type: AuthActionType.LOG_IN,
					payload: { name, user },
				});
			} catch (error) {
				console.error(error.message);

				return dispatch({
					type: AuthActionType.AUTH_FAIL,
					payload: { error },
				});
			}
		};
	},

	setUserStatus: (user: object | null) => {
		return (dispatch: Dispatch<AuthTypes>) => {
			try {
				dispatch({
					type: AuthActionType.SET_USER_STATUS,
					payload: { user },
				});
			} catch (error) {
				console.log(error.message);

				return dispatch({
					type: AuthActionType.AUTH_FAIL,
					payload: { error },
				});
			}
		};
	},

	signOut: () => {
		return async (dispatch: Dispatch<AuthTypes>) => {
			try {
				await firebase.auth().signOut();
			} catch (error) {
				console.error(error.message);

				return dispatch({
					type: AuthActionType.AUTH_FAIL,
					payload: { error },
				});
			}

			dispatch({
				type: AuthActionType.SIGN_OUT,
			});
		};
	},

	signUp: (
		name: string,
		email: string,
		password: string,
		confirmPassword: string
	) => {
		return async (dispatch: Dispatch<AuthTypes>) => {
			if (password !== confirmPassword) {
				return 'Password do not match'; // FIX dispatch errorr
			}

			try {
				const { user } = await firebase
					.auth()
					.createUserWithEmailAndPassword(email.trim(), password.trim());

				if (user) {
					await firebase.firestore().collection('user').doc(user.uid).set({
						name: name.trim(),
						email: email.trim(),
						id: user.uid,
					});

					await user.updateProfile({ displayName: name });

					dispatch({
						type: AuthActionType.SIGN_UP,
						payload: { name, user },
					});
				}
			} catch (error) {
				console.error(error.message);

				return dispatch({
					type: AuthActionType.AUTH_FAIL,
					payload: { error },
				});
			}
		};
	},
};
