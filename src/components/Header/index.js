import { React } from 'react';
import AdImage from '../AdImage';
import Filter from '../Filter';
import CartIcon from './CartIcon';
import FavouriteIcon from './FavouriteIcon';
import TextInput from './TextInput';

const Header = (context) =>
	<div className="menu">
		<Filter { ...context }/>
		<TextInput { ...context }/>
		<CartIcon { ...context }/>
		<FavouriteIcon { ...context }/>
		<AdImage { ...context }/>
	</div>;

export default Header;
