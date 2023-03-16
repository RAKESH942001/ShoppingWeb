/* eslint-disable max-lines-per-function */
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CategoriesType = (context) => {
	const { state, setState, config: { categories }, data } = context;

	const handleChange = (event) => {
		setState({ ...state,
			tabs: 'categoryWise',
			category: event.target.value });
	};

	return (
		<Box>
			<FormControl variant="standard" sx={ { minWidth: 120 } }>
				<InputLabel>{data}</InputLabel>
				<Select
					label={ data }
					value={ state.category }
					onChange={ handleChange }
				>
					{categories[data].map((product, key) =>
						<MenuItem key={ key } value={ product }>
							{product}
						</MenuItem>)}
				</Select>
			</FormControl>
		</Box>
	);
};

export default CategoriesType;
