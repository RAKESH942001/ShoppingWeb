import React from 'react';
import cartManager from '../../../services/cartManager';
import ProductNotFound from './ProductNotFound';
import ProductDetails from './products/ProductDetails';

const FavProductDisplay = (context) =>
	(cartManager.getFavouriteProducts(context).length === 0
		? <ProductNotFound { ...context }/>
		: cartManager.getFavouriteProducts(context).map((product, key) =>
			<ProductDetails
				key={ key }
				{ ...{ ...context, data: product } }
			/>));

export default FavProductDisplay;
