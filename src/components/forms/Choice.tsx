import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native';

const Choice = ({ letter }) => {
	return (
		<TouchableHighlight
			style={styles.circle}
			underlayColor='#fff'
			onPress={() => alert('click')}
		>
			<Text>{letter}</Text>
		</TouchableHighlight>
	);
};

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
		margin: 5,
	},
});
