import { Box } from '@mui/material';
import React from 'react';

const ProductName = (context) => {
	const { data: { productName }} = context;

	return <Box><label>{productName}</label></Box>;
};

export default ProductName;
