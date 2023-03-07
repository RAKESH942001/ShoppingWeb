import { React } from 'react';

import { Box, ListItem } from '@mui/material';
import cartManager from '../../services/cartManager';
import { peek } from '@laufire/utils/debug';

const Display = (context) => {
	const filteredProducts = cartManager.getFilter(context);

	peek(filteredProducts);
	return (
		filteredProducts.map((product, key) =>
			<Box
				key={ key }
				className="container"
			>
				<ListItem>
					{product.productName}
				</ListItem>
			</Box>));
};

export default Display;
