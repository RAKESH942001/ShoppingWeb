import { peek } from '@laufire/utils/debug';
import { AddShoppingCartSharp } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React from 'react';
import cartManager from '../services/cartManager';

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
							: peek(cartManager.addProduct(context)),
						tabs: 'cart',
					})) }
			><AddShoppingCartSharp/>
			</Button>
		</Box>
	);
};

export default AddProducts;
