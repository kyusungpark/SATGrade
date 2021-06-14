import React from 'react';
import { Text } from 'react-native';

import { AppButton, CenterSafeAreaView } from '../../components';
import { AuthNavProps } from './AuthParams';

const LandingScreen = ({ navigation }: AuthNavProps<'Landing'>) => {
	return (
		<CenterSafeAreaView>
			<Text>Landing Screen</Text>
			<AppButton
				title={'Sign Up'}
				onPress={() => navigation.navigate('SignUp')}
			/>

			<AppButton
				title={'Log In'}
				onPress={() => navigation.navigate('LogIn')}
			/>
		</CenterSafeAreaView>
	);
};

export default LandingScreen;
