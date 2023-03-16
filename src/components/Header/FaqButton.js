import { Box, Button } from '@mui/material';
import { React } from 'react';

const FaqButton = ({ state, setState }) =>
	<Box>
		<Button
			onClick={ () => setState({
				...state,
				tabs: 'Faqs',
			}) }
		>
			FAQ
		</Button>
	</Box>;

export default FaqButton;
