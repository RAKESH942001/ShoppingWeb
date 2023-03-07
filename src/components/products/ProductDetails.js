import { Box } from '@mui/material';
import React from 'react';
import AddProducts from '../cart/AddProducts';
import CheckBox from './CheckBox';
import ProductImages from './ProductImages';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';

const ProductDetails = (context) =>
	<Box className="productDetails">
		<ProductImages { ...context }/>
		<ProductName { ...context }/>
		<ProductPrice { ...context }/>
		<CheckBox { ...context }/>
		<AddProducts { ...context }/>
	</Box>;

export default ProductDetails;
