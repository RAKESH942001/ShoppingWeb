import { Box } from '@mui/material';
import React from 'react';
import BrandLogo from './Header/BrandLogo';
import ProcessingIcons from './ProcessingIcons';

const MobileViewIcons = (context) =>
	<Box sx={ {
		display: 'flex',
		paddingLeft: '70px',
	} }
	>
		<BrandLogo { ...context }/>
		<ProcessingIcons { ...context }/>
	</Box>;

export default MobileViewIcons;
