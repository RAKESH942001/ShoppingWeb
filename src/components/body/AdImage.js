/* eslint-disable max-lines-per-function */
import { Box } from '@mui/material';
import { React } from 'react';
import { Carousel } from 'react-responsive-carousel';

const AdImage = ({ config: { productAd }}) =>
	<Carousel
		autoPlay={ true }
		infiniteLoop={ true }
		showThumbs={ false }
	>
		{productAd.map((product, key) =>
			<Box key={ key } className="ad">
				<img
					src={ product }
					alt="fs"
					width="1093px"
				/>
			</Box>)}
	</Carousel>;

export default AdImage;
