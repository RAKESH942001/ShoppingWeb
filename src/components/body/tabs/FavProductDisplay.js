import React from 'react';
import cartManager from '../../../services/cartManager';
import ProductDetails from './products/ProductDetails';

const FavProductDisplay = (context) =>
	cartManager.getFavouriteProducts(context).map((product, key) =>
		<ProductDetails
			key={ key }
			{ ...{ ...context, data: product } }
		/>);

export default FavProductDisplay;
