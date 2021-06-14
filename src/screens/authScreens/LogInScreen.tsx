import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppTextInput, AppButton, CenterSafeAreaView } from '../../components';
import { AuthNavProps } from './AuthParams';
import { authActionCreator } from '../../state';

const useLogin = () => {
	const dispatch = useDispatch();
	const { logIn } = bindActionCreators(authActionCreator, dispatch);

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	return { logIn, email, password, setEmail, setPassword };
};

const LogInScreen = ({ navigation }: AuthNavProps<'LogIn'>) => {
	const { logIn, email, password, setEmail, setPassword } = useLogin();

	return (
		<CenterSafeAreaView>
			<Text>Log in</Text>
			<AppTextInput
				placeholder={'Email'}
				onChangeText={text => setEmail(text)}
			/>
			<AppTextInput
				placeholder={'Password'}
				onChangeText={text => setPassword(text)}
			/>
			<AppButton title={'Continue'} onPress={() => logIn(email, password)} />
			<View style={{ flexDirection: 'row' }}>
				<Text>Dont't Have an Account? </Text>
				<Text
					style={{ color: 'lightblue' }}
					onPress={() => navigation.navigate('SignUp')}
				>
					Sign up
				</Text>
			</View>
		</CenterSafeAreaView>
	);
};

export default LogInScreen;
