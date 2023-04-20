import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './Footer/Footer';
import MainHeader from './MainHeader';
import CarouselSlider from './Body/CarouselSlider';
import Tabs from './Body/Tabs';

const Screen = (context) =>
	<Box sx={ { display: 'flex' } }>
		<CssBaseline/>
		<MainHeader { ...context }/>
		<Box>
			<CarouselSlider { ...context }/>
			<Tabs { ...context }/>
			<Footer { ...context }/>
		</Box>
	</Box>;

export default Screen;
