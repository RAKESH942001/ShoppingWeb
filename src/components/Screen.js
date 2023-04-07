import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Tabs from './body/tabs';
import Footer from './Footer/Footer';
import Drawer from './Drawer';
import AdImage from './body/AdImage';
import MainHeader from './MainHeader';

const Screen = (context) =>
	<Box sx={ { display: 'flex' } }>
		<CssBaseline/>
		<MainHeader { ...context }/>
		<Drawer { ...context }/>
		<Box>
			<Toolbar/>
			<AdImage { ...context }/>
			<Tabs { ...context }/>
			<Footer { ...context }/>
		</Box>
	</Box>;

export default Screen;
