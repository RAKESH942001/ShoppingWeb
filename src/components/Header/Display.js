import { React } from 'react';
import ProductDetails from '../products/ProductDetails';
import cartManager from '../../services/cartManager';
import { Box } from '@mui/material';

const Display = (context) => {
	const filteredProducts = cartManager.getFilter(context);

	return (
		<Box className="filterContainer">
			{filteredProducts.map((product, key) =>
				<ProductDetails
					key={ key }
					{ ...{ ...context, data: product } }
				/>)}
		</Box>);
};

export default Display;
