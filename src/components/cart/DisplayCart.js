import React from 'react';
import ProductDetails from '../products/ProductDetails';

const DisplayCart = (context) => {
	const { state: { carts }} = context;

	return carts.map((cart, key) =>
		<ProductDetails
			key={ key }
			{ ...{ ...context, data: cart } }
		/>);
};

export default DisplayCart;
