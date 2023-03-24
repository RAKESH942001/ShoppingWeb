import { Box, Grid } from '@mui/material';
import React from 'react';
import ProductDetails from './ProductDetails';
const Products = (context) => {
	const { state: { products }} = context;

	return (
		<Box>
			<Grid
				container={ true }
				columns={ { xs: 2, sm: 8, md: 12 } }
			>
				{products.map((product, key) =>
					<Grid key={ key } item={ true } xs={ 2 } sm={ 4 } md={ 4 }>
						<ProductDetails
							key={ key }
							{ ...{ ...context, data: product } }
						/>
					</Grid>)}
			</Grid>
		</Box>
	);
};

export default Products;
