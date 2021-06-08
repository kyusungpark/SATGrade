import React, { FC, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import firebase from '../config/firebase';

type Props = {
	navigation: any;
};

const LogInScreen: FC<Props> = ({ navigation }) => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	// const [error, setError] = useState<string | null>(null);

	// handle missing field error
	const handleLogIn = async () => {
		try {
			await firebase
				.auth()
				.signInWithEmailAndPassword(email.trim(), password.trim());
		} catch (e) {
			// setError(e.message);
			console.log(e.message);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text>Log in</Text>
			<AppTextInput
				placeholder={'Email'}
				onChangeText={text => setEmail(text)}
			/>
			<AppTextInput
				placeholder={'Password'}
				onChangeText={text => setPassword(text)}
			/>
			<AppButton title={'Continue'} onPress={handleLogIn} />
			<View style={{ flexDirection: 'row' }}>
				<Text>Dont't Have an Account? </Text>
				<Text
					style={{ color: 'blue' }}
					onPress={() => navigation.navigate('SignUp')}
				>
					Sign up
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default LogInScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
