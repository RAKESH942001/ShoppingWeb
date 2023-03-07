import { MenuItem } from '@mui/material';
import React from 'react';

const Options = ({ data }) => data.map((datum, key) =>
	<MenuItem key={ key } value={ datum }>{datum}</MenuItem>);

export default Options;
