import React from 'react';
import { Box } from '@mui/material';
import About from './About';
import FaqButton from './FaqButton';
import FavouriteIcon from './FavouriteIcon';
import CartIcon from './CartIcon';
import Login from './Login';
import Home from './Home';

const ProcessIcons = (context) =>
	<Box className="icons">
		<Box sx={ { mr: 2, display: { sm: 'flex', xs: 'none' }} }>
			<About { ...context }/>
			<FaqButton { ...context }/>
			<Login { ...context }/>
		</Box>
		<Home { ...context }/>
		<FavouriteIcon { ...context }/>
		<CartIcon { ...context }/>
	</Box>;

export default ProcessIcons;
