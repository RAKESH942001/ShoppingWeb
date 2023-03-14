import { React } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

import { Box } from '@mui/material';
import cartManager from '../../services/cartManager';

const CartIcon = (context) => {
	const { state: { carts }, setState, state } = context;

	return (
		<Box
			className="cartIcon"
			onClick={ () => setState({
				...state,
				tabs: 'cart',
			}) }
		>
			<Badge badgeContent={ carts.length } color="primary">
				<ShoppingCartIcon
					fontSize="large"
					color="action"
				/>
			</Badge>
			$-{cartManager.getCartTotal(context)}
		</Box>);
};

export default CartIcon;
