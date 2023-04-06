import { Box, Drawer } from '@mui/material';
import React from 'react';

const Drawers = ({ state: { mobileOpen }, data, setState,
	state, config: drawerWidth }) => {
	const handleDrawerToggle = () => setState({ ...state,
		mobileOpen: !mobileOpen });

	return <Box>
		<Drawer
			variant="temporary"
			open={ mobileOpen }
			onClose={ handleDrawerToggle }
			ModalProps={ { keepMounted: true	} }
			sx={ { 'display': { xs: 'block', sm: 'none' },
				'& .MuiDrawer-paper': { boxSizing: 'border-box',
					width: drawerWidth, height: '90%',
					border: '5px double' }} }
		>
			{data}
		</Drawer>
	</Box>;
};

export default Drawers;
