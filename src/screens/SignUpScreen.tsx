import React, { FC, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import firebase from '../config/firebase';

type Props = {
	navigation: any;
};

const SignUpScreen = ({ navigation }: Props) => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	// const [error, setError] = useState<string | null>(null); //! WHY object not valid children

	// handle missing field error
	//! require password length to be at least 6 characters
	//! show in textinput filled if something is missing

	const handleSignUp = async () => {
		if (password !== confirmPassword) {
			return alert('Password do not match');
		}

		try {
			const { user } = await firebase
				.auth()
				.createUserWithEmailAndPassword(email.trim(), password.trim());

			if (user) {
				// add to firestore
				await firebase
					.firestore()
					.collection('users')
					.doc(user.uid)
					.set({ name: name.trim(), email: email.trim(), id: user.uid });

				// set displayname
				await user?.updateProfile({ displayName: name });
			}
		} catch (e) {
			// setError(e.message);
			console.log(e.message);
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
