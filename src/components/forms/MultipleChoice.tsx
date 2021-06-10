import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Choice from './Choice';

const MultipleChoice = ({ choices, number }) => {
	const choice = choices
		.split('')
		.map((letter, i) => <Choice letter={letter} />);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{number + 1}.</Text>
			{choice}
		</View>
	);
};

export default MultipleChoice;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	text: {
		fontSize: 15,
	},
});
