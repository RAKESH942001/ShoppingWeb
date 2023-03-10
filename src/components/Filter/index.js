import React from 'react';
import Adults from './Adults';
import Kids from './Kids';
import NewMoms from './NewMoms';

const Filter = (context) =>
	<div className="menu">
		<Kids { ...context }/>
		<NewMoms { ...context }/>
		<Adults { ...context }/>
	</div>;

export default Filter;
