import { React } from 'react';

const AdImage = ({ state: { adImage }}) =>
	<img
		src={ adImage }
		alt="fs"
		width="2500px"
		height="500px"
	/>;

export default AdImage;
