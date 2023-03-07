import cartManager from '../services/cartManager';
import config from './config';

const seed = {
	category: '',
	products: cartManager.getId(config),
	carts: [],
};

export default seed;
