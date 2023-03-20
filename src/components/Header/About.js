import { Box, Button } from '@mui/material';
import { React } from 'react';

const About = ({ state, setState }) =>
	<Box>
		<Button
			color="inherit"
			onClick={ () => setState({
				...state,
				tabs: 'aboutUs',
			}) }
		>
			AboutUs
		</Button>
	</Box>;

export default About;
