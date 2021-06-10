import React, { useEffect, useState } from 'react';
import {
	Dimensions,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	View,
} from 'react-native';

import AppButton from '../components/AppButton';
import Test from '../components/forms/Test';
import { createACT, createSAT } from '../components/forms/Skeleton';

// uncontrolled form
// react-hook-form
// redux: reselect library for redux


// ACT = { section: [ { type: 'MC', choice: '', choices: ['ABCD', 'FGHJ'] } ] }
// SAT = { section: [ { type: 'MC || BLANK', choice: '', choices: ['ABCD', 'FGHJ'] } ] }
const GradeScreen = () => {
	const [type, setType] = useState<string | null>('SAT');
	const [testId, setTestId] = useState<string | null>(null);
	// conditionally render screen
	const [form, setForm] = useState(type === 'ACT' ? createACT : createSAT);

	//! infinite render onPress for the buttons when using setType
	// useEffect(() => {}, [form]);

	console.log('GradeScreen type: ', type);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.button}>
				<AppButton title='ACT' onPress={() => setType('ACT')} />
				<AppButton title='SAT' onPress={() => setType('SAT')} />
			</View>
			<View style={styles.button}>
				<AppButton title='Test Date' onPress={() => setTestId('201912')} />
			</View>
			<ScrollView
				style={styles.scrollView}
				showsVerticalScrollIndicator={false}
			>
				<Test form={form} type={type} />
			</ScrollView>
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
	scrollView: {
		flex: 1,
		backgroundColor: 'pink',
		marginHorizontal: 0.5,
		width: '90%',
	},
	button: {
		flexDirection: 'row',
		width: Dimensions.get('window').width * 0.4,

		// alignItems: 'center',
		justifyContent: 'center',
	},
});
