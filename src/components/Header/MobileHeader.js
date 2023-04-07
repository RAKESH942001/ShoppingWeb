import { Toolbar } from '@mui/material';
import React from 'react';
import HeaderIcons from '../HeaderIcons';
import Menu from './IconButtons';

const MobileHeader = (context) =>
	<Toolbar>
		<Menu { ...context }/>
		<HeaderIcons { ...context }/>
	</Toolbar>;

export default MobileHeader;
