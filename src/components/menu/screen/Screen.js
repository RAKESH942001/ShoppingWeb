import { Box } from '@mui/material';
import React from 'react';
import ProductDetails from './ProductDetails';

const Screen = (context) => {
	const { state: { products }} = context;

	return (
		<Box className="screen">
			{products.map((product, key) =>
				<ProductDetails
					key={ key }
					{ ...{ ...context, data: product } }
				/>)}
		</Box>

	);
};

export default Screen;