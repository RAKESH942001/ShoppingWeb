import { Box } from '@mui/material';
import { React } from 'react';

// Todo1: the value for height and width  should be from the config .

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
