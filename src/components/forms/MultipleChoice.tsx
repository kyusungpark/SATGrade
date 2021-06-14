import React, { FC, ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

import Center from '../Center'
// import { Center } from '..'; // ERROR cycles
import Choice from './Choice';

interface Props {
	choices: ReactNode // FIX 
	number: number;
}

// FIX need split to make 'ABCD' into an array
const MultipleChoice: FC<Props> = ({ choices, number }) => {
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
