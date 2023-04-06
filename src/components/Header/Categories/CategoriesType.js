import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import CategoriesList from './CategoriesList';

const CategoriesType = (context) => {
	const { state, setState, data } = context;

	const handleChange = (event) => {
		setState({ ...state,
			tabs: 'categoryWise',
			category: event.target.value });
	};

	return (
		<Box>
			<FormControl variant="standard" sx={ { minWidth: 120 } }>
				<InputLabel>{data}</InputLabel>
				<CategoriesList { ...{ ...context, handleChange } }/>
			</FormControl>
		</Box>
	);
};

export default CategoriesType;
