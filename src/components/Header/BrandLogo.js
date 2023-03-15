import { React } from 'react';

const BrandLogo = ({ config: { brandLogo, brandLogoHeight, brandLogoWidth }}) =>
	<img
		src={ brandLogo }
		alt="fs"
		width={ `${ brandLogoWidth }px` }
		height={ `${ brandLogoHeight }px` }
	/>;

export default BrandLogo;
