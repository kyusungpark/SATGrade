import React from 'react';
import { StyleSheet, View } from 'react-native';

//! types CHECK PLEASE
interface Props {
  children: any;
}

const Center = ({ children }: Props) => (
	<View style={styles.container}>{children}</View>
);

export default Center;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
