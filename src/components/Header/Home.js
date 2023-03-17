import { Box, Button } from '@mui/material';
import { React } from 'react';
import HomeIcon from '@mui/icons-material/Home';

const Home = ({ state, setState }) =>
	<Box className="home">
		<Button onClick={ () => setState({ ...state,
			tabs: 'product'		}) }
		>
			<HomeIcon fontSize="large"/>
		</Button>
	</Box>;

export default Home;
