import React, { useState } from 'react';
import {
	Dimensions,
	StatusBar,
	StyleSheet,
	Text,
	VirtualizedList,
	View,
} from 'react-native';

import {
	AppButton,
	MultipleChoice,
	Grid,
	CenterSafeAreaView,
} from '../../components';
import { ACT, SAT } from '../../components/forms/TestForm';

// uncontrolled form
// react-hook-form
// redux: reselect library for redux

// show submit button on header?

interface Item {
	item: {
		choice: string;
		choices: string[];
		number: number;
		section: string;
		type: string;
	};
}

// FIX kind of duplicate

interface Data {
	choice: string;
	choices: string[];
	number: number;
	section: string;
	type: string;
}

const GradeScreen = () => {
	const [type, setType] = useState('');
	const [testId, setTestId] = useState('');
	const [form, setForm] = useState({ ACT, SAT });

	const renderItem = ({ item }: Item) => {
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

	// CHECK renderItem type
	const getItem = (data: Data[], index: number) => data[index];
	const getItemCount = (data: Data[]) => data.length;

	return (
		<CenterSafeAreaView style={styles.container}>
			<View style={styles.button}>
				<AppButton title='ACT' onPress={() => setType('ACT')} />
				<AppButton title='SAT' onPress={() => setType('SAT')} />
			</View>
			<VirtualizedList
				contentContainerStyle={styles.content}
				data={type === 'ACT' ? form.ACT : form.SAT}
				getItem={getItem}
				getItemCount={getItemCount}
				initialNumToRender={15}
				keyExtractor={item => `${item.section}${item.number}`}
				renderItem={renderItem}
				persistentScrollbar={true}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				style={styles.list}
			/>
		</CenterSafeAreaView>
	);
};

export default GradeScreen;

const styles = StyleSheet.create({
	container: {
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
