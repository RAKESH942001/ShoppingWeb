import { React } from 'react';

// Todo1: the value for height and width  should be from the config .

const BrandLogo = ({ config: { brandLogo }}) =>
	<img
		src={ brandLogo }
		alt="fs"
		width="100px"
		height="100px"
	/>;

export default BrandLogo;
