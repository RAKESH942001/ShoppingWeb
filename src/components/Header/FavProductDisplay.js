import React from 'react';
import ProductDetails from '../products/ProductDetails';

const FavProductDisplay = (context) => {
	const { state: { favouriteProducts }} = context;

	return (
		favouriteProducts.map((product, key) =>
			<ProductDetails
				key={ key }
				{ ...{ ...context, data: product } }
			/>));
};

export default FavProductDisplay;
