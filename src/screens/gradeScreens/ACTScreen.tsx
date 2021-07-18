import React from 'react';
import {
	Text,
	VirtualizedList,
	StatusBar,
	StyleSheet,
	Dimensions,
} from 'react-native';

import { CenterSafeAreaView, TableRow } from '../../components';

interface Data {
	type: string;
	year: number;
	month: string;
	code: string;
}

// Show test info: 1. Average per section 2. Average Total 3. Test Date 4.
// Test ID

// <Text>2. Answer key and scales</Text>
// <Text>do later. Test Analysis</Text>

const CheckAKScreen = () => {
	const mockTestList = [
		{ type: 'ACT', year: 2020, month: '01', code: 'B07' },
		{ type: 'ACT', year: 2020, month: '02', code: 'B08' },
	];

	const renderItem = () => {
		mockTestList.map(({ type, year, month, code }) => {
			return <TableRow name={`${type} ${year}${month} ${code}`} />;
		});
	};

	const getItem = (data: Data[], index: number) => data[index];
	const getItemCount = (data: Data[]) => data.length;

	// FIX list does not show
	return (
		<CenterSafeAreaView style={styles.container}>
			<Text>ACT Screen</Text>
			<VirtualizedList
				contentContainerStyle={styles.content}
				data={mockTestList}
				getItem={getItem}
				getItemCount={getItemCount}
				initialNumToRender={15}
				keyExtractor={item => `${item.code}`}
				persistentScrollbar={true}
				renderItem={renderItem}
				style={styles.list}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			/>
		</CenterSafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: StatusBar.currentHeight,
	},
	content: {
		fontSize: 20,
		justifyContent: 'center',
	},
	list: {
		width: Dimensions.get('window').width,
		backgroundColor: 'pink',
		fontSize: 20,
	},
});

export default CheckAKScreen;
