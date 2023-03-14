import { AddShoppingCartSharp } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React from 'react';
import cartManager from '../services/cartManager';

// Todo1 :Change AddProducts to Singular.
// Todo2:move the line no 18 to service file.

const AddProducts = (context) => {
	const { setState, state: { carts }, data } = context;

	return (
		<Box className="addProduct">
			<Button
				onClick={ () => setState((state) =>
					({
						...state,
						carts: carts.length === 0
							? [...carts, data]
							: cartManager.addProduct(context),
						tabs: 'cart',
					})) }
			><AddShoppingCartSharp/>
			</Button>
		</Box>
	);
};

export default AddProducts;
