import React from 'react';
import Adults from './Adults';
import Display from './Display';
import Kids from './Kids';
import NewMoms from './NewMoms';

const Filter = (context) => {
	const { state: { category }} = context;

	return <div className="menu">
		<Kids { ...context }/>
		<NewMoms { ...context }/>
		<Adults { ...context }/>
		{category && <Display { ...context }/>}
	</div>;
};

export default Filter;
