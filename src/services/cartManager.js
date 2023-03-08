import { peek } from '@laufire/utils/debug';
import { rndString } from '@laufire/utils/random';

const filters = {
	porridges: ({ state: { products }}) =>
		products.filter((product) => product.productType === 'porridges'),
	pancakeMix: ({ state: { products }}) =>
		products.filter((product) => product.productType === 'pancakeMix'),
	pregnancy: ({ state: { products }}) =>
		products.filter((product) => product.productType === 'pregnancy'),
	lactation: ({ state: { products }}) =>
		products.filter((product) => product.productType === 'lactation'),
	healthMix: ({ state: { products }}) =>
		products.filter((product) => product.productType === 'healthMix'),
	diabeticFriendly: ({ state: { products }}) =>
		products.filter((product) =>
			product.productType === 'diabeticFriendly'),

};

const getToggleProduct = (context) => {
	const { state: { products, isFavourite }, data } = context;

	return products.map((product) => (product.id === data.id
		? { ...product, isFavourite: !isFavourite }
		: product));
};

const getFilter = (context) => {
	const { state: { category }} = context;

	return filters[category](context);
};

const getId = (config) => config.productsList.map((product) =>
	({ ...product,
		id: rndString(config.idLength),
		count: 1,
		isFavourite: false }));

const addCount = (context) => {
	const { state: { carts }, data } = context;

	return	carts.map((cart) => peek(cart.id === data.id
		? { ...cart, count: data.count + 1 }
		: cart));
};

const reduceCount = (context) => {
	const { state: { carts }, data } = context;

	return carts.map((cart) => (cart.id === data.id
		? { ...cart, count: data.count - 1 }
		: cart));
};

const cartManager = {
	getFilter,
	getId,
	reduceCount,
	addCount,
	getToggleProduct,
	filters,
};

export default cartManager;
