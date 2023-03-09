/* eslint-disable max-lines-per-function */
import { TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';
import ProductImages from '../products/ProductImages';
import Quantity from './Quantity';
import Remove from './Remove';
import SubTotal from './SubTotal';

const CartTableBody = (context) => {
	const { state: { carts }} = context;

	return (
		<TableBody>
			{carts.map((cart, key) =>
				<TableRow
					key={ key }
				>
					<TableCell>
						<Remove { ...{ ...context, data: cart } }/>
					</TableCell>
					<TableCell>
						<ProductImages { ...{ ...context, data: cart } }/>
					</TableCell>
					<TableCell>{cart.productName}</TableCell>
					<TableCell align="right">{cart.price}</TableCell>
					<TableCell align="right">
						<Quantity { ...{ ...context, data: cart } }/>
					</TableCell>
					<TableCell align="right">
						<SubTotal { ...{ ...context, data: cart } }/>
					</TableCell>
				</TableRow>)}
		</TableBody>
	);
};

export default CartTableBody;
