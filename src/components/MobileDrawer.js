/* eslint-disable max-lines-per-function */
import { React } from 'react';
import Drawer from '@mui/material/Drawer';
import { Box, Divider, List, Toolbar } from '@mui/material';
import Categories from './Header/Categories';
import MobileViewTitles from './MobileViewTitles';

const MobileDrawer = (context) => {
	const { state: { mobileOpen }, setState, state } = context;

	const drawerWidth = 400;
	const handleDrawerToggle = () => setState({ ...state,
		mobileOpen: !mobileOpen });

	const MobileDrawerElements = <div>
		<Toolbar/>
		<Divider/>
		<List>
			<Categories { ...context }/>
		</List>
		<Divider/>
		<List>
			<MobileViewTitles { ...context }/>
		</List>
	</div>;

	return 	<Box>
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
			{MobileDrawerElements}
		</Drawer>
	</Box>;
};

export default MobileDrawer;
