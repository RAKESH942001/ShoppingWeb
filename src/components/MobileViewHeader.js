/* eslint-disable max-lines-per-function */
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { React } from 'react';
import Header from './Header';
import MenuIcon from '@mui/icons-material/Menu';
import MobileViewIcons from './MobileViewIcons';

const MobileViewHeader = (context) => {
	const { state: { mobileOpen }, setState, state } = context;
	const handleDrawerToggle = () => setState({ ...state,
		mobileOpen: !mobileOpen });

	return (
		<AppBar className="header">
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={ handleDrawerToggle }
					sx={ { mr: 2, display: { sm: 'none' }} }
				>
					<MenuIcon/>
				</IconButton>
				<MobileViewIcons { ...context }/>
				<Box sx={ { mr: 2, display: { sm: 'block', xs: 'none' }} }>
					<Header { ...context }/>
				</Box>
			</Toolbar>
		</AppBar>);
};

export default MobileViewHeader;
