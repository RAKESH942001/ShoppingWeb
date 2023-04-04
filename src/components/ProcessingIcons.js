import { Box } from '@mui/material';
import React from 'react';
import CartIcon from './Header/CartIcon';
import FavouriteIcon from './Header/FavouriteIcon';
import Home from './Header/Home';

const ProcessingIcons = (context) =>
	<Box sx={ {
		display: 'flex',
		marginTop: '30px',
		paddingLeft: '200px',
	} }
	>
		<Home { ...context }/>
		<CartIcon { ...context }/>
		<FavouriteIcon { ...context }/>
	</Box>;

export default ProcessingIcons;
