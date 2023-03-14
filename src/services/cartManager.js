/* eslint-disable no-magic-numbers */
import { peek } from '@laufire/utils/debug';
import { rndString, rndValue } from '@laufire/utils/random';

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

// Todo1:Change into SingleLine Function;

const getCartTotal = ({ state: { carts }}) => {
	const Total = carts.reduce((acc, cur) => acc + (cur.count * cur.price), 0);

	return Total;
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
const removeProduct = ({ state: { carts }, data: cart }) =>
	carts.filter((product) => product.id !== cart.id);

const getId = (config) => config.productsList.map((product) =>
	({ ...product,
		id: rndString(config.idLength),
		count: 1,
		isFavourite: false }));

const addCount = (context) => {
	const { state: { carts }, data } = context;

	return	carts.map((cart) => (cart.id === data.id
		? { ...cart, count: data.count + 1 }
		: cart));
};

const reduceCount = (context) => {
	const { state: { carts }, data } = context;

	return carts.map((cart) => (cart.id === data.id
		? { ...cart, count: data.count - 1 }
		: cart));
};

const getProductAd = (context) => {
	const { config: { productAd }, state, setState } = context;

	peek(state);
	return (
		setInterval(() => setState((prevState) => ({
			...prevState,
			adImage: rndValue(productAd),
		})), 5000));
};

const addProduct = (context) => {
	const { data, state: { carts }} = context;

	// Todo:Change  find into  contains.
	return carts.find((cart) => cart.id === data.id)
		? carts.map((cart) => (cart.id === data.id
			? { ...cart, count: cart.count + 1 }
			: cart))
		: [...carts, data];
};

const getFavouriteProducts = (context) => {
	const { state: { products }} = context;

	return products.filter((product) => product.isFavourite === true);
};

const cartManager = {
	getFavouriteProducts,
	getProductAd,
	removeProduct,
	getFilter,
	addProduct,
	getId,
	reduceCount,
	addCount,
	getToggleProduct,
	getCartTotal,
	filters,
};

export default cartManager;
