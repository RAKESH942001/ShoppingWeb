import { React } from 'react';
import { Divider, List, Toolbar } from '@mui/material';
import MobileViewTitles from './MobileViewTitles';
import Drawers from './Header/Drawers';
import Categories from './Header/Categories';

const Drawer = (context) => {
	const DrawerList = <div>
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

	return <Drawers { ...{ ...context, data: DrawerList } }/>	;
};

export default Drawer;
