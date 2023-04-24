import { Box } from '@mui/material';
import { React } from 'react';

const SubTotal = (context) => {
	const { data: { count, price }} = context;

	return (
		<Box>
			<span>{count * price}</span>
		</Box>
	);
};

export default SubTotal;
