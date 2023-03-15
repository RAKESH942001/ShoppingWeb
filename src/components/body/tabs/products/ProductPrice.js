import React from 'react';
import { Box } from '@mui/material';

const ProductPrice = (context) => {
	const { data: { price }} = context;

	return <Box className="price"><label>${price}.00</label></Box>;
};

export default ProductPrice;
