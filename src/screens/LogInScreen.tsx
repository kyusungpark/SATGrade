import React, { FC, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

type Props = {
	navigation: any;
};

const SignInScreen: FC<Props> = ({ navigation }) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	return (
		<SafeAreaView style={styles.container}>
			<Text>Log in</Text>
			<AppTextInput
				placeholder={'Email'}
				onChangeText={email => setEmail(email)}
			/>
			<AppTextInput
				placeholder={'Password'}
				onChangeText={password => setPassword(password)}
			/>
			<AppButton
				title={'Continue'}
				onPress={() => navigation.navigate('Secret')}
			/>
			<Text>Have an Account? Sign in</Text>
		</SafeAreaView>
	);
};

export default SignInScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
