import { Box } from '@mui/material';
import React from 'react';
import AddProducts from '../../../Header/Filter/AddProducts';
import Favourite from './Favourite';
import ProductImages from './ProductImages';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';

const ProductDetails = (context) =>
	<Box className="productDetails">
		<ProductImages { ...context }/>
		<ProductName { ...context }/>
		<ProductPrice { ...context }/>
		<Favourite { ...context }/>
		<AddProducts { ...context }/>
	</Box>;

export default ProductDetails;
