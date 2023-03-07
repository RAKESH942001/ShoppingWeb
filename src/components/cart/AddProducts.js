import { peek } from '@laufire/utils/debug';
import { AddShoppingCartSharp } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React from 'react';

const AddProducts = (context) => {
	const { setState, state: { carts }, data } = context;

	return (
		<Box className="addProduct">
			<Button
				onClick={ () => setState(() =>
					setState((state) => ({
						...state,
						carts: peek([...carts, data]),
						tabs: 'cart',
					}))) }
			><AddShoppingCartSharp/>
			</Button>
		</Box>
	);
};

export default AddProducts;
