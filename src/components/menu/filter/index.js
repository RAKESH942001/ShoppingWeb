import { Box } from '@mui/material';
import React from 'react';
import Adults from './Adults';
import Kids from './Kids';
import NewMoms from './NewMoms';

const productType = (context) =>
	<Box>
		<Kids { ...context }/>
		<Adults { ...context }/>
		<NewMoms { ...context }/>
	</Box>;

export default productType;
