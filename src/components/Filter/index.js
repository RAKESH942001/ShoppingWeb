/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Adults from './Adults';
import Display from './Display';
import Kids from './Kids';
import NewMoms from './NewMoms';

const Filter = (context) =>
	<div className="menu">
		<Kids { ...context }/>
		<NewMoms { ...context }/>
		<Adults { ...context }/>
		{context.state.category && <Display { ...context }/>}
	</div>;

export default Filter;
