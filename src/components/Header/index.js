import { React } from 'react';
import AdImage from '../AdImage';
import BrandLogo from '../BrandLogo';
import Filter from '../Filter';
import About from './About';
import CartIcon from './CartIcon';
import FaqButton from './FaqButton';
import FavouriteIcon from './FavouriteIcon';

const Header = (context) =>
	<div className="menu">
		<BrandLogo { ...context }/>
		<Filter { ...context }/>
		<About { ...context }/>
		<FaqButton { ...context }/>
		<FavouriteIcon { ...context }/>
		<CartIcon { ...context }/>
		<AdImage { ...context }/>
	</div>;

export default Header;
