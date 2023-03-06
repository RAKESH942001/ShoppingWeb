import React from 'react';

const Options = ({ data }) => data.map((datum, key) =>
	<option key={ key } value={ datum }>{datum}</option>);

export default Options;
