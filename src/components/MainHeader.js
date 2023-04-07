import { Box } from '@mui/material';
import React from 'react';
import Drawer from './Drawer';
import Header from './Header';

const MainHeader = (context) =>
	<Box>
		<Header { ...context }/>
		<Drawer { ...context }/>
	</Box>;

export default MainHeader;
