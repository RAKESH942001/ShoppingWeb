import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Tabs from './body/tabs';
import Footer from './Footer/Footer';
import MobileViewHeader from './MobileViewHeader';
import MobileDrawer from './MobileDrawer';
import AdImage from './body/AdImage';

const ResponsiveDrawer = (context) =>
	<Box sx={ { display: 'flex' } }>
		<CssBaseline/>
		<MobileViewHeader { ...context }/>
		<MobileDrawer { ...context }/>
		<Box>
			<Toolbar/>
			<AdImage { ...context }/>
			<Tabs { ...context }/>
			<Footer { ...context }/>
		</Box>
	</Box>;

export default ResponsiveDrawer;
