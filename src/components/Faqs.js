import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Faqs = () =>
	<Box className="faq">
		<FormControl variant="standard" sx={ { width: 350 } }>
			<InputLabel>Can u recommend foods to start solids for my baby?
			</InputLabel>
			<Select>
				<MenuItem value="yes">yes we recommend</MenuItem>
			</Select>
			<InputLabel>start solids for my baby?
			</InputLabel>
			<Select>
				<MenuItem value="we">we recommend</MenuItem>
			</Select>
		</FormControl>
	</Box>;

export default Faqs;
