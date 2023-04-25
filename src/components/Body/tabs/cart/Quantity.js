import { Box, Button } from '@mui/material';
import React from 'react';
import cartManager from '../../../../services/cartManager';

const Quantity = (context) => {
	const { setState, state, data } = context;
	const trial = state.carts.find((cart) => cart.id === data.id);

	return <Box>
		<Button onClick={ () => setState((prevState) => ({
			...prevState,
			carts:	cartManager.addCount({ ...{ ...context, data: trial }}),
		})) }
		>+</Button>
		{trial.count}
		<Button onClick={ () => setState((prevState) => ({ ...prevState,
			carts: data.count > 0
				? cartManager.reduceCount({ ...{ ...context, data: trial }})
				: 0 })) }
		>-</Button>
	</Box>;
};

export default Quantity;
