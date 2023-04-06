/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-len */
import { Box, Grid } from '@mui/material';
import React from 'react';
import cartManager from '../../../../services/cartManager';
import ProductDetails from './ProductDetails';

const Products = (context) => {
	const filteredProducts = cartManager.getFilter(context);

	return (
		<Box>
			<Grid
				container={ true }
				spacing={ { xs: 2, md: 3 } }
				columns={ { xs: 1, sm: 8, md: 12 } }
			>
				{filteredProducts.map((product, key) =>
					<Grid key={ key } item={ true } xs={ 1 } sm={ 4 } md={ 4 }>
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
