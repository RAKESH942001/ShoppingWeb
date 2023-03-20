import { Box } from '@mui/material';
import { React } from 'react';

const AdImage = ({ state: { adImage, adImageHeight, adImageWidth }}) =>
	<Box className="ad">
		<img
			src={ adImage }
			alt="fs"
			width={ `${ adImageWidth }px` }
			height={ `${ adImageHeight }px` }
		/>
	</Box>;

export default AdImage;
