import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Grid from './Grid';
import MultipleChoice from './MultipleChoice';

// GOT: [SECTION NAME, [{choice, choices, type}]]
const TestSection = ({ format }) => {
	const sections = format.map(([section, questions]) => {
		const output = [];

		output.push(<Text>{section}</Text>);

		questions.forEach((question, i) => {
			const { choice, choices, type } = question;

			if (type === 'MC') {
				let currentChoices = choices[0];

				// handle even/odd choice
				if (choices && (i + 1) % 2 === 0) currentChoices = choices[1];

				output.push(
					<MultipleChoice
						key={`${section[0]}${i + 1}`}
						number={i}
						choices={currentChoices}
					/>
				);
			}

			if (type === 'GRID') {
				output.push(<Grid key={`${section[0]}${i + 1}`} number={i} />);
			}
		});

		return output;
	});

	// console.log('format at test section', format);

	return (
		<View style={styles.container}>
			{sections}
			{/* {} */}
		</View>
	);
};

export default TestSection;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
