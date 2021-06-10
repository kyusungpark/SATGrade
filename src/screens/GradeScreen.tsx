import React, { useState } from 'react';
import {
	Dimensions,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	VirtualizedList,
	View,
} from 'react-native';

import AppButton from '../components/AppButton';
import { ACT, SAT } from '../components/forms/TestForm';
import MultipleChoice from '../components/forms/MultipleChoice';
import Grid from '../components/forms/Grid';

// uncontrolled form
// react-hook-form
// redux: reselect library for redux

const GradeScreen = () => {
	const [type, setType] = useState<string | null>(null);
	const [testId, setTestId] = useState<string | null>(null);
	const [form, setForm] = useState({ ACT, SAT });

	const renderItem = ({ item }) => {
		const { choice, choices, number, section, type } = item;
		const output = [];

		if (number === 1) output.push(<Text key={section}>{section}</Text>);
		if (type === 'GRID') output.push(<Grid key={number} number={number} />);
		if (type === 'MC') {
			output.push(
				<MultipleChoice
					key={number}
					number={number}
					choices={number % 2 !== 0 ? choices[0] : choices[1]}
				/>
			);
		}

		return output;
	};

	const getItem = (data, index) => data[index];
	const getItemCount = data => data.length;

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.button}>
				<AppButton title='ACT' onPress={() => setType('ACT')} />
				<AppButton title='SAT' onPress={() => setType('SAT')} />
			</View>
			<VirtualizedList
				data={type === 'ACT' ? form.ACT : form.SAT}
				getItem={getItem}
				getItemCount={getItemCount}
				initialNumToRender={15}
				keyExtractor={item => `${item.section}${item.number}`}
				renderItem={renderItem}
				persistentScrollbar={true}
				style={styles.list}
				contentContainerStyle={styles.content}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			/>
		</SafeAreaView>
	);
};

export default GradeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingTop: StatusBar.currentHeight,
	},
	list: {
		width: Dimensions.get('window').width,
		backgroundColor: 'pink',
		fontSize: 20,
	},
	content: {
		fontSize: 20,
		justifyContent: 'center',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		// flexDirection: 'row',
		width: Dimensions.get('window').width * 0.3,
	},
});
