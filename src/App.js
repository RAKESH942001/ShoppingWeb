import { Box } from '@mui/material';
import { React, useState } from 'react';
import './App.scss';
import Tabs from './components/tabs';

const getInitial = (context) => {
	const { config: { productsList }} = context;

	return {
		currentState: { kid: '', newMom: '', adult: '' },
		products: productsList,
	};
};

const App = (context) => {
	const [state, setState] = useState(getInitial(context));
	const extendedContext = { ...{ ...context, state, setState }};

	return <Box className="App">
		<Tabs { ...extendedContext }/>
	</Box>;
};

export default App;
