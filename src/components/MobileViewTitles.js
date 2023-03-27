import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { React } from 'react';

const MobileViewTitles = () =>
	['AboutUs', 'Faqs'].map((text) =>
		<ListItem key={ text } disablePadding={ true }>
			<ListItemButton>
				<ListItemText primary={ text }/>
			</ListItemButton>
		</ListItem>)
		;

export default MobileViewTitles;
