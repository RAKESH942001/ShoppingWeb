import React from 'react';
import Adults from './Adults';
import Kids from './Kids';
import NewMoms from './NewMoms';
// Todo1:Change the name filter to Catagories.
// Todo2:Create a single component by using config as object .

const Categories = (context) =>
	<div className="filter">
		<Kids { ...context }/>
		<NewMoms { ...context }/>
		<Adults { ...context }/>
	</div>;

export default Categories;
