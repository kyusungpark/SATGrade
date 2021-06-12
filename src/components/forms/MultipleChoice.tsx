import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Choice from './Choice';

interface Props {
	choices: any[]; //! types // ERROR
	number: number;
}

const MultipleChoice = ({ choices, number }: Props) => {
	const choice = choices
		.split('')
		.map((letter: any, i: number) => <Choice key={i} letter={letter} />);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{number}.</Text>
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
