import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native';

interface Props {
	letter: any;
}

const Choice = ({ letter }: Props) => (
	<TouchableHighlight
		style={styles.circle}
		underlayColor='#fff'
		onPress={() => alert('hi')}
	>
		<Text>{letter}</Text>
	</TouchableHighlight>
);

export default Choice;

const styles = StyleSheet.create({
	circle: {
		borderRadius:
			Math.round(
				Dimensions.get('window').width + Dimensions.get('window').height
			) / 2,
		width: Dimensions.get('window').width * 0.1,
		height: Dimensions.get('window').width * 0.1,

		backgroundColor: '#fff',
		borderWidth: 2,
		borderColor: '#555555',

		justifyContent: 'center',
		alignItems: 'center',
		margin: Dimensions.get('window').width * 0.03,
	},
});
