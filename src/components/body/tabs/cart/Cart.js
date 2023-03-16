import React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CartTableBody from './CartTableBody';
import CartTotal from './CartTotal';
import { Box } from '@mui/material';

const Cart = (context) => {
	const { config: { cartHeader }} = context;

	return <Box>
		<TableContainer component={ Paper }>
			<Table sx={ { minWidth: 650 } }>
				<TableHead>
					<TableRow>
						{cartHeader.map((header, key) =>
							<TableCell key={ key }>
								{header}</TableCell>)}
					</TableRow>
				</TableHead>
				<CartTableBody { ...context }/>
			</Table>
		</TableContainer>
		<CartTotal { ...context }/>
	</Box>;
};

export default Cart;
