
import { Select } from '@mui/material';
import { React } from 'react';
import Options from '../../Options';
const Adults = (context) => {
	const { state, setState, config: { adults }} = context;

	return (
		<Select
			label="Kids"
			onChange={ (event) => setState({
				...state,
				productType: event.target.value,
			}) }
		>
			<Options { ...{ ...context, data: adults } }/>
		</Select>
	);
};

export default Adults;
