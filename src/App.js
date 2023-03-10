import { Box } from '@mui/material';
import { React, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Tabs from './components/tabs';
import cartManager from './services/cartManager';

const App = (context) => {
	const { once, seed } = context;
	const [state, setState] = useState(seed);
	const extendedContext = { ...{ ...context, state, setState }};

	once(() => cartManager.getProductAd(extendedContext));
	return (
		<Box	className="App">
			<Header { ...extendedContext }/>
			<Tabs { ...extendedContext }/>
		</Box>);
};

export default App;
