import React from 'react';
import Quantity from '../cart/Quantity';
import { Button, Dialog, DialogActions,
	DialogContent } from '@mui/material';

const AddProductsDialog = (context) => {
	const { setState, state, data } = context;

	const handleClose = () => {
		setState({ ...state,
			products: state.products.map((product) => (product.id === data.id
				? { ...product, dialogLogin: false }
				: product)) });
	};

	return <div>
		<Dialog open={ data.dialogLogin } onClose={ handleClose }>
			<DialogContent>
				<Quantity { ...context }/>
			</DialogContent>
			<DialogActions>
				<Button onClick={ handleClose }>ok</Button>
			</DialogActions>
		</Dialog>
	</div>;
};

export default AddProductsDialog;
