import React from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppButton, Center } from '../components';
import { authActionCreator } from '../state';

const ProfileScreen = () => {
	const dispatch = useDispatch();
	const { signOut } = bindActionCreators(authActionCreator, dispatch);

	return (
		<Center>
			<Text>Profile</Text>
			<AppButton title='Sign out' onPress={signOut} />
		</Center>
	);
};

export default ProfileScreen;
