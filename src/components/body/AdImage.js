import { Box } from '@mui/material';
import { React } from 'react';

const AdImage = ({ state: { adImage, adImageHeight, adImageWidth }}) =>
	<Box className="ad">
		<img
			src={ adImage }
			alt="fs"
			width="1093px"
		/>
	</Box>;

export default AdImage;
