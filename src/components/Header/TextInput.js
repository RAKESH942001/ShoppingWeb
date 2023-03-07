import { Box, TextField } from '@mui/material';
import { React } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const TextInput = (context) => {
	const { setState, state } = context;

	return (
		<Box style={ { paddingLeft: '350px' } }>
			<TextField
				id="outlined-basic"
				placeholder="Enter"
				value={ state.textInput }
				onChange={ (event) => setState({
					...state,
					textInput: event.target.value,
				}) }
			/>
			<SearchIcon fontSize="large"/>
		</Box>);
};

export default TextInput;
