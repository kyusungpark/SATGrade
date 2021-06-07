import React, { FC, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import firebase from '../config/firebase';

// import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

type Props = {
	navigation: any;
};

const SignUpScreen: FC<Props> = ({ navigation }) => {
	let [name, setName] = useState<string>('');
	let [email, setEmail] = useState<string>('');
	let [password, setPassword] = useState<string>('');
	let [confirmPassword, setConfirmPassword] = useState<string>('');

	//! handle empty fields
	const handleSignUp = () => {
		if (password.trim() !== confirmPassword.trim()) {
			return alert('Passwords do not match.');
		}

		try {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email.trim(), password.trim())
				.then(response => {
					const uid = response.user.uid;
					const data = {
						id: uid,
						email: email.trim(),
						name: name.trim(),
					};

					// create users in db
					const usersRef = firebase.firestore().collection('users');
					usersRef
						.doc(uid)
						.set(data)
						.then(() => {
							navigation.navigate('Secret');
						})
						.catch(error => alert(error));
				});
		} catch (error) {
			console.error(error.code);
			console.error(error.message);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text>Sign Up</Text>
			<AppTextInput placeholder={'Name'} onChangeText={text => setName(text)} />
			<AppTextInput
				placeholder={'Email Address'}
				onChangeText={text => setEmail(text)}
			/>
			<AppTextInput
				placeholder={'Password'}
				onChangeText={text => setPassword(text)}
			/>
			<AppTextInput
				placeholder={'Confirm Password'}
				onChangeText={text => setConfirmPassword(text)}
			/>
			<AppButton title={'Register'} onPress={handleSignUp} />
			<View style={{ flexDirection: 'row' }}>
				<Text>Have an Account? </Text>
				<Text
					style={{ color: 'blue' }}
					onPress={() => navigation.navigate('LogIn')}
				>
					Log in
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
