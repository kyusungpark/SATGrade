import React from 'react';

import { AppButton, Center } from '../../components';
import { GradeNavProps } from './GradeParams';

const GradeHomeScreen = ({ navigation }: GradeNavProps<'GradeHome'>) => {
	return (
		<Center>
			<AppButton
				title='Grade Test'
				onPress={() => navigation.navigate('Scantron')}
			/>
			<AppButton
				title='Answer Key & Scale'
				onPress={() => navigation.navigate('CheckAK')}
			/>

			<AppButton
				title='ACT'
				onPress={() => navigation.navigate('Scantron')}
			/>
			<AppButton
				title='SAT'
				onPress={() => navigation.navigate('CheckAK')}
			/>
		</Center>
	);
};

export default GradeHomeScreen;
