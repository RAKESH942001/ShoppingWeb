import { React } from 'react';
import { Divider, List, Toolbar } from '@mui/material';
import Categories from './Header/Categories';
import MobileViewTitles from './MobileViewTitles';
import Drawers from './Header/Drawers';

const MobileDrawer = (context) => {
	const MobileDrawerElements = <div>
		<Toolbar/>
		<Divider/>
		<List>
			<Categories { ...context }/>
		</List>
		<Divider/>
		<List>
			<MobileViewTitles { ...context }/>
		</List>
	</div>;

	return <Drawers { ...{ ...context, data: MobileDrawerElements } }/>	;
};

export default MobileDrawer;
