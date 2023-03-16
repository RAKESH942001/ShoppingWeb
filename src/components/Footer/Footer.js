import { React } from 'react';
import BrandLogo from '../Header/BrandLogo';
import About from '../Header/About';
import FaqButton from '../Header/FaqButton';
import { Box, Typography } from '@mui/material';

const Footer = (context) =>
	<Box className="footer">
		<Box><BrandLogo { ...context }/></Box>
		<Box>
			<span><Typography variant="h4">Useful Links</Typography></span>
			<Box><About { ...context }/></Box>
			<Box><FaqButton { ...context }/> </Box>
		</Box>
		<Box><Typography variant="h4">Connect with us</Typography>
			No:3,Shakti Nagar,Chennai-600001
			<Box>Tollfree: 088-1660</Box>
			<Box>Email: customercare@Orgavit.com</Box>
		</Box>
	</Box>;

export default Footer;
