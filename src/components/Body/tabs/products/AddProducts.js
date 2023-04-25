/* eslint-disable max-lines-per-function */
import React from 'react';
import { Box, Grid } from '@mui/material';
import cartManager from '../../../../services/cartManager';
import LoginButton from './TestButton';
import AddProductsDialog from './AddProductsDialog';
const loadingTime = 2000;

const AddProducts = (context) => {
	const { setState, state: { carts }, data } = context;

	const onButtonClick = () => {
		setState((state) =>
			({
				...state,
				products: cartManager.getToggleLoading(context),
				carts: carts.length === 0
					? [...carts, data]
					: cartManager.addProduct(context),
			}));
		setTimeout(() => {
			setState((state) =>
				({ ...state,
					products: cartManager
						.getLoaded({ ...context, state }) }));
		}, loadingTime);
	};

	return (
		<Box className="addProduct">
			<Grid container={ true } item={ true } xs={ 12 }>
				<LoginButton
					variant="contained"
					color="inherit"
					loading={ data.loading }
					onClick={ onButtonClick }
				>
					{data.loading ? 'added' : 'add to Cart'}
				</LoginButton>
				<AddProductsDialog { ...context }/>
			</Grid>
		</Box>
	);
};

export default AddProducts;
