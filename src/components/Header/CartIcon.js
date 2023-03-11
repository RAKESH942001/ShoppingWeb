import { React } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

import { Box } from '@mui/material';

const CartIcon = (context) => {
	const { state: { carts }, setState, state } = context;

	return (
		<Box onClick={ () => setState({
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
		</Box>);
};

export default CartIcon;
