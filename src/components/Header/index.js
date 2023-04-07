import { React } from 'react';
import BrandLogo from './BrandLogo';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Categories from './Categories';
import WebIcons from './WebIcons';

const Header = (context) =>
	<Box>
		<AppBar className="header">
			<Toolbar sx={ { display: 'flex',
				justifyContent: 'space-around' } }
			>
				<BrandLogo { ...context }/>
				<Categories { ...context }/>
				<WebIcons { ...context }/>
			</Toolbar>
		</AppBar>
	</Box>;

export default Header;
