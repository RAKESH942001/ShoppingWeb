import { Box } from '@mui/material';
import { React } from 'react';
import './App.scss';
import Screen from './components/Screen';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = (context) =>
	<Box className="App">
		<Screen { ...context }/>
	</Box>;

export default App;
