const config = {
	brandLogoHeight: 100,

	brandLogoWidth: 100,

	cartHeader: ['Product', 'Name', 'Price', 'Quantity', 'SubTotal'],

	tabLabel: ['product',
		'cart',
		'categoryWise',
		'aboutUs',
		'faq',
		'favourite'],

	brandLogo: './brand/logo.png',

	categories: {
		kids: ['Porridges', 'PanCakeMix'],

		newMoms: ['Pregnancy', 'Lactation'],

		adults: ['HealthMix', 'DiabeticFriendly'],
	},
	types: ['kids', 'newMoms', 'adults'],

	idLength: 5,

	productAd: ['/Image/banner-3.jpg',
		'/Image/banner-1.jpg',
		'/Image/banner.jpg'],

	productsList: [
		{
			type: 'kids',
			productType: 'Porridges',
			productName: 'Sprouted Ragi Almond',
			img: '/img/SpoutedRagiAlmondMix.jpg',
			price: 230,
		},
		{
			type: 'kids',
			productType: 'Porridges',
			productName: 'Trillet Cereal',
			img: '/img/TrilletCereal.jpg',
			price: 300,
		},
		{
			type: 'kids',
			productType: 'PanCakeMix',
			productName: 'Magic Millet Pancake Mix',
			img: '/img/MagicMilletPanCake.jpg',
			price: 450,
		},
		{
			type: 'kids',
			productType: 'PanCakeMix',
			productName: 'Cocoa Millet Pancake Mix',
			img: '/img/CocoMilletPanCake.jpg',
			price: 280,
		},
		{
			type: 'newMoms',
			productType: 'Pregnancy',
			productName: 'Black Urad Dal',
			img: '/img/BlackUralDal.jpg',
			price: 350,
		},
		{
			type: 'newMoms',
			productType: 'Pregnancy',
			productName: 'New Moms Buddy',
			img: '/img/NewMomsBuddy.jpg',
			price: 450,
		},
		{
			type: 'newMoms',
			productType: 'Lactation',
			productName: 'Almond Instant Milk',
			img: '/img/AlmondInstantMilk.jpg',
			price: 400,
		},
		{
			type: 'newMoms',
			productType: 'Lactation',
			productName: '37 Ingredient Health Mix',
			img: '/img/37IncridentsInstantMix.jpg',
			price: 1000,
		},
		{
			type: 'adults',
			productType: 'HealthMix',
			productName: 'Sprouted Ragi Moong DalMix',
			img: '/img/SpoutedRagiMoogDal.jpg',
			price: 300,
		},
		{
			type: 'adults',
			productType: 'HealthMix',
			productName: 'Banana Sprouted Ragi Mix',
			img: '/img/BananaSproutedRaggiMix.jpg',
			price: 350,
		},
		{
			type: 'adults',
			productType: 'DiabeticFriendly',
			productName: 'Sprouted Ragi Almond Mix(adults)',
			img: '/img/SpoutedRagiAlmondMix.jpg',
			price: 500,
		},
		{
			type: 'adults',
			productType: 'DiabeticFriendly',
			productName: '37 Ingredients Mix(adults)',
			img: '/img/37IncridentsInstantMix.jpg',
			price: 1000,
		},
	],

};

export default config;
