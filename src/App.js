import { Box } from '@mui/material';
import { React, useState } from 'react';
import './App.scss';
import Tabs from './components/tabs';

const App = (context) => {
	const { seed } = context;
	const [state, setState] = useState(seed);
	const extendedContext = { ...{ ...context, state, setState }};

	return (
		<Box	className="App">
			<Tabs { ...extendedContext }/>
		</Box>);
};

export default App;
