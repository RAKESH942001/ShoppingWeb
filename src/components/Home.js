import { Button } from '@mui/material';
import { React } from 'react';
import HomeIcon from '@mui/icons-material/Home';

const Home = ({ state, setState }) =>
	<div>
		<Button onClick={ () => setState({ ...state,
			tabs: 'product'		}) }
		>
			<HomeIcon fontSize="large"/>
		</Button>
	</div>;

export default Home;
