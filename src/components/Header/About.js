import { Box, Button } from '@mui/material';
import { React } from 'react';

const About = ({ state, setState }) =>
	<Box>
		<Button
			onClick={ () => setState({
				...state,
				tabs: 'AboutUs',
			}) }
		>
			AboutUs
		</Button>
	</Box>;

export default About;
