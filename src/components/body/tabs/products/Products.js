/* eslint-disable max-len */
import { Box, Grid } from '@mui/material';
import React from 'react';
import ProductDetails from './ProductDetails';
const Products = (context) => {
	const { state: { products }} = context;

	return (
		<Box>
			<Grid container={ true } spacing={ { xs: 2, md: 2 } }>
				{products.map((product, key) =>
					<Grid key={ key } item={ true } xs={ 2 } md={ 3 }>
						<ProductDetails
							key={ key }
							{ ...{ ...context, data: product } }
						/>
					</Grid>)};
			</Grid>
		</Box>
	);
};

export default Products;
