import { React } from 'react';
import ProductDetails from '../products/ProductDetails';
import cartManager from '../../services/cartManager';

const Display = (context) => {
	const filteredProducts = cartManager.getFilter(context);

	return (
		filteredProducts.map((product, key) =>
			<ProductDetails
				key={ key }
				className="container"
				{ ...{ ...context, data: product } }
			/>));
};

export default Display;
