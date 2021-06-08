import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GradeScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Grade</Text>
		</View>
	);
};

export default GradeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
