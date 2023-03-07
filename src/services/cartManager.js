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

const getFilter = (context) =>
	filters[context.state.category](context);

const cartManager = {
	getFilter,
	filters,
};

export default cartManager;
