import { Button } from '@mui/material';
import { React } from 'react';

const FaqButton = (context) => {
	const { state, setState } = context;

	return (
		<div>
			<Button
				onClick={ () => setState({
					...state,
					tabs: 'Faqs',
				}) }
			>
				FAQ
			</Button>
		</div>);
};

export default FaqButton;
