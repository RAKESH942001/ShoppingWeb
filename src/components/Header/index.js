import { React } from 'react';
import BrandLogo from './BrandLogo';
import Categories from './Categories';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Icons from './Icons';

const Header = (context) =>
	<Box>
		<AppBar className="header">
			<Toolbar sx={ { display: 'flex',
				justifyContent: 'space-around' } }
			>
				<BrandLogo { ...context }/>
				<Categories { ...context }/>
				<Icons { ...context }/>
			</Toolbar>
		</AppBar>
	</Box>;

export default Header;
