import { Box } from '@mui/material';
import React from 'react';
import CartIcon from './Header/CartIcon';
import FavouriteIcon from './Header/FavouriteIcon';

const ProcessingIcons = (context) =>
	<Box sx={ {
		display: 'flex',
		paddingLeft: '350px',
	} }
	>
		<CartIcon { ...context }/>
		<FavouriteIcon { ...context }/>
	</Box>;

export default ProcessingIcons;
