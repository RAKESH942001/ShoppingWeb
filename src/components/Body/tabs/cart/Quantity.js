import { Box, Button } from '@mui/material';
import React from 'react';
import cartManager from '../../../../services/cartManager';
const Quantity = (context) => {
	const { setState, data, state } = context;

	return <Box>
		<Button onClick={ () => setState(() => ({
			...state,
			carts:	cartManager.addCount(context),
		})) }
		>+</Button>
		{data.count}
		<Button onClick={ () => setState(() => ({ ...state,
			carts: data.count > 0
				? cartManager.reduceCount(context)
				: 0 })) }
		>-</Button>
	</Box>;
};

export default Quantity;
