import { Box } from '@mui/material';
import React from 'react';
import BrandLogo from './Header/BrandLogo';
import ProcessingIcons from './ProcessingIcons';

const HeaderIcons = (context) =>
	<Box sx={ {
		display: 'flex',
		justifyContent: 'center',
		paddingLeft: '20px',
	} }
	>
		<BrandLogo { ...context }/>
		<ProcessingIcons { ...context }/>
	</Box>;

export default HeaderIcons;
