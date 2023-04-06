import { AppBar, Box, Toolbar } from '@mui/material';
import { React } from 'react';
import Header from './Header';
import IconButtons from './Header/IconButtons';

import MobileViewIcons from './MobileViewIcons';

const MobileViewHeader = (context) =>
	<AppBar className="header">
		<Toolbar>
			<IconButtons { ...context }/>
			<MobileViewIcons { ...context }/>
			<Box sx={ { mr: 2, display: { sm: 'block', xs: 'none' }} }>
				<Header { ...context }/>
			</Box>
		</Toolbar>
	</AppBar>;

export default MobileViewHeader;
