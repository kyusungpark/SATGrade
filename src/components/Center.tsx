import React, { FC } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
	style?: StyleProp<ViewStyle>;
}

const Center: FC<Props> = ({ children, style }) => (
	<View style={style ? [styles.container, style] : styles.container}>
		{children}
	</View>
);

export default Center;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
