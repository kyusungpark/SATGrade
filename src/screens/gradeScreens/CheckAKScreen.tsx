import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CheckAKScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Check your Answers Here</Text>
		</View>
	);
};

export default CheckAKScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
