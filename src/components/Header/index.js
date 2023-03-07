/* eslint-disable react/destructuring-assignment */
import { React } from 'react';
import Filter from '../Filter';
import CartIcon from './CartIcon';
import Display from './Display';
import TextInput from './TextInput';

const Header = (context) =>
	<div className="menu">
		<Filter { ...context }/>
		<TextInput { ...context }/>
		<CartIcon { ...context }/>
		{context.state.category && <Display { ...context }/>}
	</div>;

export default Header;
