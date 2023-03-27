/* eslint-disable max-lines-per-function */
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { React } from 'react';
import Header from './Header';
import BrandLogo from './Header/BrandLogo';
import CartIcon from './Header/CartIcon';
import FavouriteIcon from './Header/FavouriteIcon';
import MenuIcon from '@mui/icons-material/Menu';

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
				<BrandLogo { ...context }/>
				<CartIcon { ...context }/>
				<FavouriteIcon { ...context }/>
				<Box sx={ { mr: 2, display: { sm: 'block', xs: 'none' }} }>
					<Header { ...context }/>
				</Box>
			</Toolbar>
		</AppBar>);
};

export default MobileViewHeader;
