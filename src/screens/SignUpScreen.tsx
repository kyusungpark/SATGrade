import React, { FC, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

type Props = {
	navigation: any;
};

const SignUpScreen: FC<Props> = ({ navigation }) => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	return (
		<SafeAreaView style={styles.container}>
			<Text>Sign Up</Text>
			<AppTextInput placeholder={'Name'} onChangeText={name => setName(name)} />
			<AppTextInput
				placeholder={'Email Address'}
				onChangeText={email => setEmail(email)}
			/>
			<AppTextInput
				placeholder={'Password'}
				onChangeText={password => setPassword(password)}
			/>
			<AppButton
				title={'Register'}
				onPress={() => navigation.navigate('Secret')}
			/>
			<View>
				<Text>Have an Account? Log in</Text>
				<Text> Log in</Text>
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
