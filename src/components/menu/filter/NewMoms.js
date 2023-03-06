import { Select } from '@mui/material';
import { React } from 'react';
import Options from '../../Options';
const NewMoms = (context) => {
	const { state, setState, config: { newMoms }} = context;

	return (
		<Select
			label="Moms"
			onChange={ (event) => setState({
				...state,
				productType: event.target.value,
			}) }
		>
			<Options { ...{ ...context, data: newMoms } }/>
		</Select>
	);
};

export default NewMoms;
