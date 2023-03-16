const config = {
	brandLogoHeight: 100,

	brandLogoWidth: 100,

	tabLabel: ['product',
		'cart',
		'categoryWise',
		'AboutUs',
		'Faq',
		'favourite'],

	brandLogo: './brand/logo.png',

	categories: {
		kids: ['porridges', 'pancakeMix'],

		newMoms: ['pregnancy', 'lactation'],

		adults: ['healthMix', 'diabeticFriendly'],
	},
	types: ['kids', 'newMoms', 'adults'],

	idLength: 5,

	productAd: ['/Image/banner-3.jpg',
		'/Image/banner-1.jpg',
		'/Image/banner.jpg'],

	productsList: [
		{
			type: 'kids',
			productType: 'porridges',
			productName: 'Sprouted Ragi Almond',
			img: '/img/SpoutedRagiAlmondMix.jpg',
			price: 230,
		},
		{
			type: 'kids',
			productType: 'porridges',
			productName: 'Trillet Cereal',
			img: '/img/TrilletCereal.jpg',
			price: 300,
		},
		{
			type: 'kids',
			productType: 'pancakeMix',
			productName: 'Magic Millet Pancake Mix',
			img: '/img/MagicMilletPanCake.jpg',
			price: 450,
		},
		{
			type: 'kids',
			productType: 'pancakeMix',
			productName: 'Cocoa Millet Pancake Mix',
			img: '/img/CocoMilletPanCake.jpg',
			price: 280,
		},
		{
			type: 'newMoms',
			productType: 'pregnancy',
			productName: 'Black Urad Dal',
			img: '/img/BlackUralDal.jpg',
			price: 350,
		},
		{
			type: 'newMoms',
			productType: 'pregnancy',
			productName: 'New Moms Buddy',
			img: '/img/NewMomsBuddy.jpg',
			price: 450,
		},
		{
			type: 'newMoms',
			productType: 'lactation',
			productName: 'Almond Instant Milk',
			img: '/img/AlmondInstantMilk.jpg',
			price: 400,
		},
		{
			type: 'newMoms',
			productType: 'lactation',
			productName: '37 Ingredient Health Mix',
			img: '/img/37IncridentsInstantMix.jpg',
			price: 1000,
		},
		{
			type: 'adults',
			productType: 'healthMix',
			productName: 'Sprouted Ragi Moong DalMix',
			img: '/img/SpoutedRagiMoogDal.jpg',
			price: 300,
		},
		{
			type: 'adults',
			productType: 'healthMix',
			productName: 'Banana Sprouted Ragi Mix',
			img: '/img/BananaSproutedRaggiMix.jpg',
			price: 350,
		},
		{
			type: 'adults',
			productType: 'diabeticFriendly',
			productName: 'Sprouted Ragi Almond Mix(adults)',
			img: '/img/SpoutedRagiAlmondMix.jpg',
			price: 500,
		},
		{
			type: 'adults',
			productType: 'diabeticFriendly',
			productName: '37 Ingredients Mix(adults)',
			img: '/img/37IncridentsInstantMix.jpg',
			price: 1000,
		},
	],

};

export default config;
