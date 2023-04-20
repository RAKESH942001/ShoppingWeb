/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Box, Grid } from '@mui/material';
import cartManager from '../../../../services/cartManager';
import LoginButton from './TestButton';

// Todo1 :Change AddProducts to Singular.
// Todo2:move the line no 18 to service file.

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
					products: cartManager.getLoadingFalse(context) }));
		}, 2000);
	};

	return (
		<Box className="addProduct">
			<Grid container={ true } xs={ 2 }>
				<LoginButton
					variant="contained"
					color="inherit"
					loading={ data.loading }
					onClick={ onButtonClick }
				>
					{data.loading ? 'added' : 'addCart'}
				</LoginButton>
			</Grid>
		</Box>
	);
};

export default AddProducts;
