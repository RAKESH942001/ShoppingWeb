/* eslint-disable max-lines-per-function */
import React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import Products from '../products/Products';
import Cart from '../cart/Cart';
import Header from '../Header';
import FavProductDisplay from '../Header/FavProductDisplay';

const Tabs = (context) => {
	const { setState, state: { tabs }, config: { tabLabel }} = context;

	return (
		<TabContext value={ tabs }>
			<Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
				<TabList
					onChange={ (event, value) => setState((state) => ({
						...state,
						tabs: value,
					})) }
				>
					{tabLabel.map((data, key) =>
						<Tab key={ key } label={ data } value={ data }/>)}
				</TabList>
			</Box>
			<TabPanel value="product"><Products { ...context }/></TabPanel>
			<TabPanel value="filter"><Header { ...context }/> </TabPanel>
			<TabPanel value="cart"> <Cart { ...context }/> </TabPanel>
			<TabPanel value="favourite"> <FavProductDisplay { ...context }/>
			 </TabPanel>
		</TabContext>);
};

export default Tabs;
