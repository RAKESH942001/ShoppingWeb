import { React } from 'react';

const BrandLogo = ({ config: { brandLogo }}) =>
	<img
		src={ brandLogo }
		alt="fs"
		width="100px"
		height="100px"
	/>;

export default BrandLogo;
