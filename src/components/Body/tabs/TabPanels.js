import AboutUs from '../../Footer/AboutUs';
import Cart from './cart/Cart';
import Faqs from './Faqs';
import FavProductDisplay from './FavProductDisplay';
import Products from './products/Products';

const TabPanels = {
	product: Products,
	cart: Cart,
	favourite: FavProductDisplay,
	aboutUs: AboutUs,
	faq: Faqs,
};

export default TabPanels;
