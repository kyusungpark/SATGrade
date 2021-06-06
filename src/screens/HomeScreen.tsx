import React, { FC } from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import AppButton from '../components/AppButton';

type Props = {
  navigation: any; 
};

const HomeScreen: FC<Props> = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Home Screen</Text>
			<AppButton
				title={'Sign Up'}
				onPress={() => navigation.navigate('SignUp')}
			/>

			<AppButton
				title={'Log In'}
				onPress={() => navigation.navigate('LogIn')}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
