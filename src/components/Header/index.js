import { React } from 'react';
import AdImage from '../AdImage';
import Filter from '../Filter';
import About from './About';
import CartIcon from './CartIcon';
import FavouriteIcon from './FavouriteIcon';
import TextInput from './TextInput';

const Header = (context) =>
	<div className="menu">
		<Filter { ...context }/>
		<About { ...context }/>
		<TextInput { ...context }/>
		<FavouriteIcon { ...context }/>
		<CartIcon { ...context }/>
		<AdImage { ...context }/>
	</div>;

export default Header;
