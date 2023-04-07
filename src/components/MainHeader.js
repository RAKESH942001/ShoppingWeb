import { AppBar, Box, Toolbar } from '@mui/material';
import { React } from 'react';
import Header from './Header';
import Menu from './Header/IconButtons';
import HeaderIcons from './HeaderIcons';

const MainHeader = (context) =>
	<AppBar className="header">
		<Toolbar>
			<Menu { ...context }/>
			<HeaderIcons { ...context }/>
			<Box sx={ { mr: 2, display: { sm: 'block', xs: 'none' }} }>
				<Header { ...context }/>
			</Box>
		</Toolbar>
	</AppBar>;

export default MainHeader;
