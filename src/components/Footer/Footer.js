import { React } from 'react';
import BrandLogo from '../BrandLogo';
import About from '../Header/About';
import FaqButton from '../Header/FaqButton';

// Todo1:Use material Ui instead of div and span.

const Footer = (context) =>
	<div className="footer">
		<div><BrandLogo { ...context }/></div>
		<div>
			<span><h2>Useful Links</h2></span>
			<div><About { ...context }/></div>
			<div><FaqButton { ...context }/> </div>
		</div>
		<div><h2>Connect with us</h2>
			No:3,Shakti Nagar,Chennai-600001
			<div>Tollfree: 088-1660</div>
			<div>Email: customercare@Orgavit.com</div>
		</div>
	</div>;

export default Footer;
