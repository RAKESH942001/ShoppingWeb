import { React } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from '@mui/material';

const CartIcon = () =>
	<Box>
		<FavoriteBorderIcon fontSize="large"/>
		<ShoppingCartIcon fontSize="large"/>
	</Box>;

export default CartIcon;
