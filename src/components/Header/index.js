/* eslint-disable react/destructuring-assignment */
import { React } from 'react';
import Filter from '../Filter';
import CartIcon from './CartIcon';
import Display from './Display';
import FavouriteIcon from './FavouriteIcon';
import TextInput from './TextInput';

const Header = (context) =>
	<div className="menu">
		<Filter { ...context }/>
		<TextInput { ...context }/>
		<CartIcon { ...context }/>
		<FavouriteIcon { ...context }/>
		{context.state.category && <Display { ...context }/>}
	</div>;

export default Header;
