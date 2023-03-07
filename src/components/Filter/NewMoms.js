/* eslint-disable max-lines-per-function */
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const NewMoms = (context) => {
	const { state, setState } = context;

	const handleChange = (event) => {
		setState({ ...state,
			category: event.target.value });
	};

	return (
		<Box>
			<FormControl variant="standard" sx={ { minWidth: 120 } }>
				<InputLabel>NewMoms</InputLabel>
				<Select
					label="NewMoms"
					value={ state.category }
					onChange={ handleChange }
				>
					<MenuItem value="pregnancy">pregnancy</MenuItem>
					<MenuItem value="lactation">lactation</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};

export default NewMoms;
