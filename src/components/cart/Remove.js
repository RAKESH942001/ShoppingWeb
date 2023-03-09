import { Button } from '@mui/material';
import { React } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import cartManager from '../../services/cartManager';

const Remove = (context) => {
	const { state, setState } = context;

	return (
		<Button
			startIcon={ <ClearIcon/> }
			onClick={ () => setState({
				...state,
				carts: cartManager.removeProduct(context),
			}) }
		/>);
};

export default Remove;
