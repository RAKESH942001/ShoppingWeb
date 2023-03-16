import { React } from 'react';
import AdImage from './AdImage';
import BrandLogo from './BrandLogo';
import Categories from './Categories';
import Home from '../Home';
import About from './About';
import CartIcon from './CartIcon';
import FaqButton from './FaqButton';
import FavouriteIcon from './FavouriteIcon';

const Header = (context) =>
	<div className="menu">
		<BrandLogo { ...context }/>
		<Categories { ...context }/>
		<About { ...context }/>
		<FaqButton { ...context }/>
		<Home { ...context }/>
		<FavouriteIcon { ...context }/>
		<CartIcon { ...context }/>
		<AdImage { ...context }/>
	</div>;

export default Header;
