import { Select } from '@mui/material';
import { React } from 'react';
import Options from '../../Options';

const Kids = (context) => {
	const { state, setState, config: { kids }} = context;

	return (
		<Select
			placeholder="Kids"
			onChange={ (event) => setState({
				...state,
				productType: event.target.value,
			}) }
		>
			<Options { ...{ ...context, data: kids } }/>
		</Select>
	);
};

export default Kids;
