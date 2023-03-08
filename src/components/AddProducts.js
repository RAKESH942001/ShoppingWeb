import { AddShoppingCartSharp } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React from 'react';

const AddProducts = (context) => {
	const { setState, state: { carts }, data } = context;

	return (
		<Box className="addProduct">
			<Button
				onClick={ () => setState((state) =>
					({
						...state,
						carts: [...carts, data],
						tabs: 'cart',
					})) }
			><AddShoppingCartSharp/>
			</Button>
		</Box>
	);
};

export default AddProducts;
