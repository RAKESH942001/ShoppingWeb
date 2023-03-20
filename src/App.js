import { Box } from '@mui/material';
import { React } from 'react';
import './App.scss';
import AdImage from './components/body/AdImage';
import Tabs from './components/body/tabs';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import cartManager from './services/cartManager';

const App = (context) => {
	const { once } = context;

	once(() => cartManager.getProductAd(context));

	return (
		<Box className="App">
			<Header { ...context }/>
			<AdImage { ...context }/>
			<Tabs { ...context }/>
			<Footer { ...context }/>
		</Box>);
};

export default App;
