import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppTextInput from '../AppTextInput';

interface Props {
	number: number;
}

const Grid = ({ number }: Props) => {
	const onChangeText = () => {
		// console.log('manage state');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{number + 1}.</Text>
			<AppTextInput
				placeholder={'type your answer here'}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

export default Grid;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 15,
	},
});
