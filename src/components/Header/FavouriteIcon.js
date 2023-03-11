import { Badge, Box } from '@mui/material';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import cartManager from '../../services/cartManager';

const FavouriteIcon = (context) => {
	const { state, setState, state: { favouriteProducts }} = context;

	return (
		<Box onClick={ () => setState({
			...state,
			tabs: 'favourite',
			favouriteProducts: cartManager.getFavouriteProducts(context),
		}) }
		>
			<Badge badgeContent={ favouriteProducts.length } color="primary">
				<FavoriteBorderIcon fontSize="large"/>
			</Badge>
		</Box>);
};

export default FavouriteIcon;
