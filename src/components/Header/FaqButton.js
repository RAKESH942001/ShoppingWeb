import { Box, Button } from '@mui/material';
import { React } from 'react';

const FaqButton = ({ state, setState }) =>
	<Box>
		<Button
			color="inherit"
			onClick={ () => setState({
				...state,
				tabs: 'faq',
			}) }
		>
			FAQ
		</Button>
	</Box>;

export default FaqButton;
