import React, { FC } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
	// error: string | null; //! optional? string | null
	placeholder: string;
	onChangeText: (text: string) => void;
};

const Input: FC<Props> = ({ placeholder, onChangeText }) => {
	return (
		<View style={styles.container}>
			<TextInput
				autoCapitalize='none'
				style={styles.text}
				placeholder={placeholder}
				onChangeText={onChangeText}
				secureTextEntry={placeholder.includes('Password') ? true : false}
			/>
			{/* <View>
				<Text>{error ? error : ''}</Text>
			</View> */}
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
		width: '100%',
		paddingLeft: 20,
	},
});

export default Input;
