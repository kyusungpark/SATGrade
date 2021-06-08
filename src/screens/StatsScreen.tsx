import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StatsScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Dashboard</Text>
		</View>
	);
};

export default StatsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
