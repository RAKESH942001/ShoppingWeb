import { map, values } from '@laufire/utils/collection';
import { Box } from '@mui/material';
import React from 'react';
import CategoriesType from './CategoriesType';

const Categories = (context) => {
	const { config: { categories }} = context;

	return (
		<Box sx={ {
			display: {
				sm: 'flex', xs: 'block',
				paddingLeft: '40px',
			},
		} }
		>
			{values(map(categories, (type, index) =>
				<Box key={ index }>
					<CategoriesType { ...{ ...context, data: index } }/>
				</Box>))}
		</Box>);
};

export default Categories;
