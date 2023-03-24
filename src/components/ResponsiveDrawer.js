/* eslint-disable max-lines-per-function */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import Tabs from './body/tabs';
import Footer from './Footer/Footer';

const drawerWidth = 390;

const ResponsiveDrawer = (context) => {
	const { state: { mobileOpen }, setState, state } = context;

	const handleDrawerToggle = () => setState({ ...state,
		mobileOpen: !mobileOpen });

	const drawer = <div>
		<Toolbar/>
		<Divider/>
		<List>
			{['kids', 'newMoms', 'adults'].map((text) =>
				<ListItem key={ text } disablePadding={ true }>
					<ListItemButton>
						<ListItemText primary={ text }/>
					</ListItemButton>
				</ListItem>)}
		</List>
		<Divider/>
		<List>
			{['AboutUs', 'faqs', 'cart'].map((text) =>
				<ListItem key={ text } disablePadding={ true }>
					<ListItemButton>
						<ListItemText primary={ text }/>
					</ListItemButton>
				</ListItem>)}
		</List>
	</div>;

	return (
		<Box sx={ { display: 'flex' } }>
			<CssBaseline/>
			<AppBar
				className="header"
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={ handleDrawerToggle }
						sx={ { mr: 2, display: { sm: 'none' }} }
					>
						<MenuIcon/>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={ { width: { sm: drawerWidth }, flexShrink: { sm: 0 }} }
				aria-label="mailbox folders"
			>
				<Drawer
					variant="temporary"
					open={ mobileOpen }
					onClose={ handleDrawerToggle }
					ModalProps={ {
						keepMounted: true,
					} }
					sx={ {
						'display': { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box',
							width: drawerWidth },
					} }
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={ { flexGrow: 1, p: 3, width: { sm: `calc(100% - ${ drawerWidth }px)` }} }
			>
				<Toolbar/>
				<Typography>oooooo</Typography>
				<Tabs { ...context }/>
				<Footer { ...context }/>
			</Box>
		</Box>
	);
};

export default ResponsiveDrawer;
