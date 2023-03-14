import { Box } from '@mui/material';
import { React } from 'react';
import cartManager from '../../services/cartManager';

const CartTotal = (context) =>
	<Box className="cartContainer">
		<h1>Cart Total</h1>
		<h2>Total:  {cartManager.getCartTotal(context)}</h2>
	</Box>;

export default CartTotal;
