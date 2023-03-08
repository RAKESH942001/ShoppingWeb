import { Box, Typography } from '@mui/material';
import { React } from 'react';
import cartManager from '../../services/cartManager';

const CartTotal = (context) =>
	<Box>
		<Typography>Cart Total</Typography>
		<span>Total:{cartManager.getCartTotal(context)}</span>

	</Box>;

export default CartTotal;
