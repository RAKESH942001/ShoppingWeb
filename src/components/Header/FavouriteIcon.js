import { Badge, Box } from '@mui/material';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import cartManager from '../../services/cartManager';

const FavouriteIcon = (context) => {
	const { state, setState } = context;

	return (
		<Box
			className="favouriteIcon"
			onClick={ () => setState({
				...state,
				tabs: 'favourite',

			}) }
		>
			<Badge
				badgeContent={ cartManager.getFavouriteProducts(context)
					.length }
				color="primary"
			>
				<FavoriteBorderIcon fontSize="large"/>
			</Badge>
		</Box>);
};

export default FavouriteIcon;
