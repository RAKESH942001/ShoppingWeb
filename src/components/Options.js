import { MenuItem } from '@mui/material';
import React from 'react';

const Options = ({ data }) => data.map((product, key) =>
	<MenuItem key={ key }value={ product }>
		{product}</MenuItem>);

export default Options;
