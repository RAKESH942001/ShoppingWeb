import { Box } from '@mui/material';
import { React } from 'react';

const AdImage = ({ state: { adImage }}) =>
	<Box className="ad">
		<img
			src={ adImage }
			alt="fs"
			width="1903px"
			height="500px"
		/>
	</Box>;

export default AdImage;
