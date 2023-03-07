/* eslint-disable max-lines-per-function */
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Adults = (context) => {
	const { state, setState } = context;

	const handleChange = (event) => {
		setState({ ...state,
			category: event.target.value });
	};

	return (
		<Box>
			<FormControl sx={ { minWidth: 150 } }>
				<InputLabel>Adults</InputLabel>
				<Select
					label="Adults"
					value={ state.category }
					onChange={ handleChange }
				>
					<MenuItem value="healthMix">healthMix</MenuItem>
					<MenuItem value="diabeticFriendly">
						diabeticFriendly</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};

export default Adults;
