import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import MobileHeader from './MobileHeader';
import WebHeader from './WebHeader';

const Header = (context) =>
	<AppBar className="header">
		<Toolbar>
			<MobileHeader { ...context }/>
			<Box sx={ { mr: 2, display: { sm: 'block', xs: 'none' }} }>
				<WebHeader { ...context }/>
			</Box>
		</Toolbar>
	</AppBar>;

export default Header;
