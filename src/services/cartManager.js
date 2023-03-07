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
	const { state: { products, isChecked }, data } = context;

	return products.map((product) => (product.id === data.id
		? { ...product, isChecked: !isChecked }
		: product));
};

const getFilter = (context) => {
	const { state: { category }} = context;

	return filters[category](context);
};

const idLength = 5;
const getId = (config) => config.productsList.map((product) =>
	({ ...product,
		id: rndString(idLength),
		isChecked: false }));

const cartManager = {
	getFilter,
	getId,
	getToggleProduct,
	filters,
};

export default cartManager;
