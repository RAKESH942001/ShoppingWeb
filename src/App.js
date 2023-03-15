import { Box } from '@mui/material';
import { React, useState } from 'react';
import './App.scss';
import Tabs from './components/body/tabs';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import cartManager from './services/cartManager';

const App = (context) => {
	const { once, seed } = context;
	const [state, setState] = useState(seed);
	const extendedContext = { ...{ ...context, state, setState }};

	once(() => cartManager.getProductAd(extendedContext));

	return (
		<Box className="App">
			<Header { ...extendedContext }/>
			<Tabs { ...extendedContext }/>
			<Footer { ...extendedContext }/>
		</Box>);
};

export default App;
