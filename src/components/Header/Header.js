import { React } from 'react';
import BrandLogo from './BrandLogo';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Categories from './Categories';
import ProcessIcons from './ProcessIcons';
import Menu from './IconButtons';

const Header = (context) =>
	<Box>
		<AppBar className="header">
			<Toolbar sx={ { display: 'flex',
				justifyContent: 'space-around' } }
			>
				<Box sx={ { mr: 2, display: { sm: 'none' }} }>
					<Menu { ...context }/>
				</Box>
				<BrandLogo { ...context }/>
				<Box sx={ { mr: 2, display: { sm: 'block', xs: 'none' }} }>
					<Categories { ...context }/>
				</Box>
				<ProcessIcons { ...context }/>
			</Toolbar>
		</AppBar>
	</Box>;

export default Header;
