import cartManager from '../services/cartManager';
import config from './config';

const seed = {
	category: '',
	tabs: 'product',
	products: cartManager.getId(config),
	carts: [],
	favouriteProducts: [],
	isLogin: false,
	mobileOpen: false,
};

export default seed;
