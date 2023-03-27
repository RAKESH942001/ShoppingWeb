import { React } from 'react';
import ProductDetails from './products/ProductDetails';
import cartManager from '../../../services/cartManager';
import { Box, Typography } from '@mui/material';
import { peek } from '@laufire/utils/debug';

const Display = (context) => {
	const { state: { category }} = context;
	const filteredProducts = cartManager.getFilter(context);

	peek(category);
	return (
		<Box style={ { paddingLeft: '400px' } }>
			<Typography variant="h2">{category}</Typography>
			<Box className="filterContainer">
				{ category && filteredProducts.map((product, key) =>
					<ProductDetails
						key={ key }
						{ ...{ ...context, data: product } }
					/>)}
			</Box>
		</Box>);
};

export default Display;
