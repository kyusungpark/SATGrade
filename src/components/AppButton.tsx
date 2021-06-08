import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
	title: string;
	onPress: () => void;
};

const AppButton = ({ title, onPress }: Props) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '80%',
		flexDirection: 'row',
		justifyContent: 'center',

		borderWidth: 1,
		padding: 10,
		margin: 5,

		backgroundColor: '#555555',
		borderRadius: 100,
	},
	buttonText: {
		color: 'white',
	},
});

export default AppButton;
