import { ListItem, ListItemButton } from '@mui/material';
import { React } from 'react';
import About from './Header/About';
import FaqButton from './Header/FaqButton';
import Login from './Header/Login';

const MobileViewTitles = (context) =>
	<ListItem sx={ { display: { sm: 'none', xs: 'block' }} }>
		<ListItemButton>
			<About { ...context }/>
		</ListItemButton>
		<ListItemButton>
			<FaqButton { ...context }/>
		</ListItemButton>
		<ListItemButton>
			<Login { ...context }/>
		</ListItemButton>
	</ListItem>;

export default MobileViewTitles;
