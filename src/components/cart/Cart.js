import React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CartTableBody from './CartTableBody';

const Cart = (context) =>
	<TableContainer component={ Paper }>
		<Table sx={ { minWidth: 650 } }>
			<TableHead>
				<TableRow>
					<TableCell>Product</TableCell>
					<TableCell>Name</TableCell>
					<TableCell align="right">Price</TableCell>
					<TableCell align="center">Quantity</TableCell>
					<TableCell align="right">SubTotal</TableCell>
				</TableRow>
			</TableHead>
			<CartTableBody { ...context }/>
		</Table>
	</TableContainer>;

export default Cart;
