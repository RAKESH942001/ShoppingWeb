import { Button } from '@mui/material';
import { React } from 'react';

// Todo1:Change to Box.
// Todo2:Change into Single Line Function.

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
