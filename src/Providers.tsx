import * as React from 'react';
import { Provider } from 'react-redux';

import Routes from './Routes';
import { store } from './state';

export const Providers = () => (
	<Provider store={store}>
		<Routes />
	</Provider>
);
