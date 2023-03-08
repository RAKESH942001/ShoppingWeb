import { TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';
import ProductImages from '../products/ProductImages';
import Quantity from './Quantity';

const CartTableBody = (context) => {
	const { state: { carts }} = context;

	return (
		<TableBody>
			{carts.map((cart, key) =>
				<TableRow
					key={ key }
				>
					<TableCell>
						<ProductImages { ...{ ...context, data: cart } }/>
					</TableCell>
					<TableCell>{cart.productName}</TableCell>
					<TableCell align="right">{cart.price}</TableCell>
					<TableCell align="right">
						<Quantity { ...{ ...context, data: cart } }/>
					</TableCell>
				</TableRow>)}
		</TableBody>
	);
};

export default CartTableBody;
