import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import AppButton from '../../components/AppButton';
import { AuthNavProps } from './AuthParams';

const HomeScreen = ({ navigation }: AuthNavProps<'Landing'>) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Landing Screen</Text>
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
