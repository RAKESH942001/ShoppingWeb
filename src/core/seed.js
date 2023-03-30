import cartManager from '../services/cartManager';
import config from './config';

const seed = {
	category: '',
	tabs: 'product',
	products: cartManager.getId(config),
	carts: [],
	isLogin: false,
	mobileOpen: false,
	nestedCategory: false,
};

export default seed;
