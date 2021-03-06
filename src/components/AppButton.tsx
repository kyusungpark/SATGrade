import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
	title: string;
	onPress: () => void; 
}

const AppButton = ({ title, onPress }: Props) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get('window').width * 0.8,
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
