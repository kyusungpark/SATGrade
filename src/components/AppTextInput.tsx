import React, { FC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface Props {
	placeholder: string;
	onChangeText: (text: string) => void;
}

const Input: FC<Props> = ({ onChangeText, placeholder }) => {
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.text}
				placeholder={placeholder}
				onChangeText={onChangeText}
				secureTextEntry={placeholder === 'Password' ? true : false}
			/>
		</View>
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

		borderRadius: 100,
	},
	text: {
		color: 'black',
	},
});

export default Input;
