import { React } from 'react';
import BrandLogo from '../BrandLogo';
import About from '../Header/About';
import FaqButton from '../Header/FaqButton';

const Footer = (context) =>
	<div className="footer">
		<div><BrandLogo { ...context }/></div>
		<span><h2>Useful Links</h2></span>
		<div><About { ...context }/></div>
		<div><FaqButton { ...context }/> </div>
	</div>;

export default Footer;
