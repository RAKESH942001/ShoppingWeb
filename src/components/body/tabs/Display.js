import { React } from 'react';
import ProductDetails from './products/ProductDetails';
import cartManager from '../../../services/cartManager';
import { Box, Typography } from '@mui/material';
import ProductNotFound from './ProductNotFound';

const Display = (context) => {
	const { state: { category }} = context;
	const filteredProducts = cartManager.getFilter(context);

	return (
		<Box
			className="filterContainer"
			sx={ { display: { sm: 'block', xs: 'block' }} }
		>
			<Typography variant="h2">{category}</Typography>
			<Box>
				{ filteredProducts.length === 0
					? <ProductNotFound { ...context }/>
					: filteredProducts.map((product, key) =>
						<ProductDetails
							key={ key }
							{ ...{ ...context, data: product } }
						/>)}
			</Box>
		</Box>);
};

export default Display;
