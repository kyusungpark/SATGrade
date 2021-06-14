import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface Props {
	style?: StyleProp<ViewStyle>;
}

const CenterSafeAreaView: FC<Props> = ({ children, style }) => (
	<SafeAreaView style={style ? [styles.container, style] : styles.container}>
		{children}
	</SafeAreaView>
);

export default CenterSafeAreaView;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
