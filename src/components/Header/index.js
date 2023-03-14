import { React } from 'react';
import AdImage from '../AdImage';
import BrandLogo from '../BrandLogo';
import Filter from '../Filter';
import About from './About';
import CartIcon from './CartIcon';
import FaqButton from './FaqButton';
import FavouriteIcon from './FavouriteIcon';
import TextInput from './TextInput';

const Header = (context) =>
	<div className="menu">
		<BrandLogo { ...context }/>
		<Filter { ...context }/>
		<About { ...context }/>
		<FaqButton { ...context }/>
		<TextInput { ...context }/>
		<FavouriteIcon { ...context }/>
		<CartIcon { ...context }/>
		<AdImage { ...context }/>
	</div>;

export default Header;
