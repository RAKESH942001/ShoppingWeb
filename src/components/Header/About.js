import { Button } from '@mui/material';
import { React } from 'react';

const About = (context) => {
	const { state, setState } = context;

	return (
		<div>
			<Button
				onClick={ () => setState({
					...state,
					tabs: 'AboutUs',
				}) }
			>
				AboutUs
			</Button>
		</div>);
};

export default About;
