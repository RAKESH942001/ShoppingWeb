/* eslint-disable react/destructuring-assignment */
import { Box } from '@mui/material';
import React from 'react';
import Adults from './Adults';
import Display from './Display';
import Kids from './Kids';
import NewMoms from './NewMoms';

const Filter = (context) =>
	<Box>
		<Kids { ...context }/>
		<NewMoms { ...context }/>
		<Adults { ...context }/>
		{context.state.category && <Display { ...context }/>}
	</Box>;

export default Filter;
