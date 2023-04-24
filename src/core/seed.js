import cartManager from '../services/cartManager';
import config from './config';

const seed = {
	category: 'All',
	tabs: 'product',
	products: cartManager.getId(config),
	carts: [],
	isLogin: false,
	mobileOpen: false,
};

export default seed;
