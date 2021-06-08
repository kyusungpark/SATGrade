import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DrawerScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Drawer</Text>
		</View>
	);
};

export default DrawerScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
