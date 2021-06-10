import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestSection from './TestSection';

const Test = ({ form, type }) => {
	const format = Object.entries(form).map(section => section);

	return (
		<View style={{ padding: 10 }}>
			<TestSection format={format} />
		</View>
	);
};

export default Test;

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});
