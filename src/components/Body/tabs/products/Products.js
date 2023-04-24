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
				spacing={ { xs: 2, md: 26 } }
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
