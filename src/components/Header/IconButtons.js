import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const Menu = (context) => {
	const { state: { mobileOpen }, setState, state } = context;
	const handleDrawerToggle = () => setState({ ...state,
		mobileOpen: !mobileOpen });

	return (
		<IconButton
			color="inherit"
			aria-label="open drawer"
			edge="start"
			onClick={ handleDrawerToggle }
		>
			<MenuIcon/>
		</IconButton>);
};

export default Menu;
