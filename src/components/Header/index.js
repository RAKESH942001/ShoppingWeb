import { React } from 'react';
import BrandLogo from './BrandLogo';
import Categories from './Categories';
import Home from './Home';
import About from './About';
import CartIcon from './CartIcon';
import FaqButton from './FaqButton';
import FavouriteIcon from './FavouriteIcon';
import Login from './Login';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const Header = (context) =>
	<Box>
		<AppBar className="header">
			<Toolbar>
				<BrandLogo { ...context }/>
				<Categories { ...context }/>
				<About { ...context }/>
				<FaqButton { ...context }/>
				<Login { ...context }/>
				<Home { ...context }/>
				<FavouriteIcon { ...context }/>
				<CartIcon { ...context }/>
			</Toolbar>
		</AppBar>
	</Box>;

export default Header;
