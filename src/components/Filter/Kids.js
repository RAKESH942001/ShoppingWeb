/* eslint-disable max-lines-per-function */
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { peek } from '@laufire/utils/debug';
import Options from '../Options';

const Kids = (context) => {
	const { state, setState, config: { kids }} = context;

	const handleChange = (event) => {
		setState({ ...state,
			category: event.target.value });
	};

	peek(state);
	return (
		<Box sx={ { minWidth: 150 } }>
			<FormControl>
				<InputLabel>kids</InputLabel>
				<Select
					label="kids"
					value={ state.category }
					onChange={ handleChange }
				>
					<Options { ...{ ...context, data: kids } }/>
				</Select>
			</FormControl>
		</Box>
	);
};

export default Kids;
