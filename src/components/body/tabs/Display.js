import { React } from 'react';
import ProductDetails from './products/ProductDetails';
import cartManager from '../../../services/cartManager';
import { Box } from '@mui/material';

// Todo1:Change <h1> into material ui h1.

const Display = (context) => {
	const { state: { category }} = context;
	const filteredProducts = cartManager.getFilter(context);

	return (
		<Box style={ { paddingLeft: '400px' } }>
			<h1>{category}</h1>
			<Box className="filterContainer">
				{filteredProducts.map((product, key) =>
					<ProductDetails
						key={ key }
						{ ...{ ...context, data: product } }
					/>)}
			</Box>
		</Box>);
};

export default Display;
