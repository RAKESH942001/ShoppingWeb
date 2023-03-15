import { Box, TextField } from '@mui/material';
import { React } from 'react';

const TextInput = (context) => {
	const { setState, state } = context;

	return (
		<Box>
			<TextField
				className="text"
				id="outlined-basic"
				placeholder="Enter"
				value={ state.textInput }
				onChange={ (event) => setState({
					...state,
					textInput: event.target.value,
				}) }
			/>
		</Box>);
};

export default TextInput;
