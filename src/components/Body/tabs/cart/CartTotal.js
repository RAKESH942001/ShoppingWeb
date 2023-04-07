import { Box } from '@mui/material';
import { React } from 'react';
import cartManager from '../../../../services/cartManager';
const CartTotal = (context) =>
	<Box className="cartContainer">
		<h1>Cart Total Amount :{cartManager.getCartTotal(context)} </h1>
	</Box>;

export default CartTotal;
