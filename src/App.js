import { Box } from '@mui/material';
import { React } from 'react';
import './App.scss';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import cartManager from './services/cartManager';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = (context) => {
	const { once } = context;

	once(() => cartManager.getProductAd(context));

	return (
		<Box className="App">
			<ResponsiveDrawer { ...context }/>
		</Box>);
};

export default App;
