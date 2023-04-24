import { MenuItem, Select } from '@mui/material';
import React from 'react';

const CategoriesList = (context) => {
	const { config: { categories }, data, state, handleChange } = context;

	return (
		<Select
			label={ data }
			value={ state.category === 'All' ? '' : state.category }
			onChange={ handleChange }
		>
			{categories[data].map((product, key) =>
				<MenuItem key={ key } value={ product }>
					{product}
				</MenuItem>)}
		</Select>);
};

export default CategoriesList;
