import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

const GradeHomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<AppButton
				title='Grade Test'
				onPress={() => navigation.navigate('Scantron')}
			/>
			<AppButton
				title='Answer Key & Scale'
				onPress={() => navigation.navigate('CheckAK')}
			/>
		</View>
	);
};

export default GradeHomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
