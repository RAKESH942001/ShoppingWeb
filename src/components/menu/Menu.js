import { Box } from '@mui/material';
import React from 'react';
import Filter from './filter';

const Menu = (context) =>
	<Box>
		<Filter { ...context }/>
	</Box>;

export default Menu;
