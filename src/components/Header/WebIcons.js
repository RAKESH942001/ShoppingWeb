import React from 'react';
import { Box } from '@mui/material';
import About from './About';
import FaqButton from './FaqButton';
import FavouriteIcon from './FavouriteIcon';
import CartIcon from './CartIcon';
import Login from './Login';
import Home from './Home';

const WebIcons = (context) =>
	<Box className="icons">
		<About { ...context }/>
		<FaqButton { ...context }/>
		<Login { ...context }/>
		<Home { ...context }/>
		<FavouriteIcon { ...context }/>
		<CartIcon { ...context }/>
	</Box>;

export default WebIcons;
