import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import React from 'react';
import cartManager from '../../../../services/cartManager';

const Favourite = (context) => {
	const { setState, data } = context;

	return (
		<Checkbox
			className="checkBox"
			color="secondary"
			icon={ <FavoriteBorder/> }
			checkedIcon={ <Favorite/> }
			checked={ data.checked }
			onClick={ () => setState((state) => ({
				...state,
				products: cartManager.getToggleProduct(context),
			})) }
		/>);
};

export default Favourite;
