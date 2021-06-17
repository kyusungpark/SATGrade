import React, { FC } from 'react';
import {
	StyleSheet,
	TextInput,
	View,
	StyleProp,
	ViewStyle,
} from 'react-native';

// ADD SHOW ERROR MESSAGE

interface Props {
	placeholder: string;
	style?: StyleProp<ViewStyle>;
	onChangeText: (string: string) => void;
}

const AppTextInput: FC<Props> = ({ placeholder, style, onChangeText }) => {
	return (
		<View style={style ? [styles.container, style] : styles.container}>
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

export default AppTextInput;

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
