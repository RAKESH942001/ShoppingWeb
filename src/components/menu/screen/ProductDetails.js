import { Box } from '@mui/material';
import React from 'react';
import ProductImages from './ProductImages';
import ProductName from './ProductName';

const ProductDetails = (context) =>
	<Box className="productDetails">
		<ProductImages { ...context }/>
		<ProductName { ...context }/></Box>;

export default ProductDetails;
