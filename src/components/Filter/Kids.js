/* eslint-disable max-lines-per-function */
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Kids = (context) => {
	const { state, setState, config: { kids }} = context;

	const handleChange = (event) => {
		setState({ ...state,
			category: event.target.value });
	};

	return (
		<Box>
			<FormControl sx={ { minWidth: 150 } }>
				<InputLabel>kids</InputLabel>
				<Select
					label="kids"
					value={ state.category }
					onChange={ handleChange }
				>
					{kids.map((product, key) =>
						<MenuItem key={ key }value={ product }>
							{product}
						</MenuItem>)}
				</Select>
			</FormControl>
		</Box>
	);
};

export default Kids;
