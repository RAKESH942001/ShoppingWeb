import { Box } from '@mui/material';
import { React, useState } from 'react';
import './App.scss';
import Tabs from './components/tabs';
import seed from './core/seed';

const App = (context) => {
	const [state, setState] = useState(seed);
	const extendedContext = { ...{ ...context, state, setState }};

	return (
		<Box
			className="App"
			style={ { backgroundImage: `url(${ `${ process.env.PUBLIC_URL }/img/backgroundImage.png` })` } }
		>
			<Tabs { ...extendedContext }/>
		</Box>);
};

export default App;
