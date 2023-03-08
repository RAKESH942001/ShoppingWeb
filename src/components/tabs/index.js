import React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import Filter from '../Filter';
import Products from '../products/Products';
import Cart from '../cart/Cart';

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
			<TabPanel value="filter"><Filter { ...context }/> </TabPanel>
			<TabPanel value="cart"> <Cart { ...context }/> </TabPanel>
		</TabContext>);
};

export default Tabs;
