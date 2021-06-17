import React, { FC, ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

import Center from '../Center';
// import { Center } from '..'; // ERROR cycles
import Choice from './Choice';

interface Props {
	choices: string;
	number: number;
}

// FIX this is returning <Choice> TYPES?
const MultipleChoice: FC<Props> = ({ choices, number }) => {
  console.log(choices)
	const choice = choices
		.split('')
		.map((letter: string, i: number) => <Choice key={i} letter={letter} />);

	return (
		<Center style={styles.container}>
			<Text style={styles.text}>{number}.</Text>
			{choice}
		</Center>
	);
};

export default MultipleChoice;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	text: {
		fontSize: 15,
	},
});
