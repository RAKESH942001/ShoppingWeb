import { map, values } from '@laufire/utils/collection';
import { Box } from '@mui/material';
import React from 'react';
import CategoriesType from './CategoriesType';

const Categories = (context) => {
	const { config: { categories }} = context;

	return (
		values(map(categories, (
			type, index, key
		)	 =>
			<Box
				key={ key }
				className="filter"
			>
				<CategoriesType { ...{ ...context, data: index } }/>
			</Box>)));
};

export default Categories;
