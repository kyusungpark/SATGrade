import React from 'react';

import { AppButton, Center } from '../../components';
import { GradeNavProps } from './GradeParams';

const GradeHomeScreen = ({ navigation }: GradeNavProps<'GradeHome'>) => {
	return (
		<Center>
			<AppButton title='ACT' onPress={() => navigation.navigate('ACT')} />
			<AppButton title='SAT' onPress={() => navigation.navigate('SAT')} />
		</Center>
	);
};

export default GradeHomeScreen;
