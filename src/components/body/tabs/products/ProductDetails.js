import { Box } from '@mui/material';
import React from 'react';
import AddProducts from './AddProducts';
import Favourite from './Favourite';
import ProductImages from './ProductImages';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';

const ProductDetails = (context) =>
	<Box sx={ { marginBottom: '80px' } }>
		<Box className="productDetails">
			<ProductImages { ...context }/>
			<ProductName { ...context }/>
			<ProductPrice { ...context }/>
			<Favourite { ...context }/>
			<AddProducts { ...context }/>
		</Box>
	</Box>;

export default ProductDetails;
