import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppButton, AppTextInput, CenterSafeAreaView } from '../../components';
import { AuthNavProps } from './AuthParams';
import { authActionCreator } from '../../state';

// ADD
// handle missing field error
// require password length to be at least 6 characters
// show in textinput filled if something is missing
// create alert component

const SignUpScreen = ({ navigation }: AuthNavProps<'SignUp'>) => {
	const dispatch = useDispatch();
	const { signUp } = bindActionCreators(authActionCreator, dispatch);

	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	return (
		<CenterSafeAreaView>
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
			<AppButton
				title={'Register'}
				onPress={() => signUp(name, email, password, confirmPassword)}
			/>
			<View style={{ flexDirection: 'row' }}>
				<Text>Have an Account? </Text>
				<Text
					style={{ color: 'blue' }}
					onPress={() => navigation.navigate('LogIn')}
				>
					Log in
				</Text>
			</View>
		</CenterSafeAreaView>
	);
};

export default SignUpScreen;
