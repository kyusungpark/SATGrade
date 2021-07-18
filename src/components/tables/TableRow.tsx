import React, { FC } from 'react';
import { Text } from 'react-native';
import { Center } from '../';

interface Props {
	name: string;
}

const TableRow: FC<Props> = ({ name }) => {
	console.log('name', name);
	return (
		<Center>
			<Text>{name}</Text>
		</Center>
	);
};

export default TableRow;
