/* eslint-disable max-lines-per-function */
import React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import Cart from './cart/Cart';
import Display from './Display';
import FavProductDisplay from './FavProductDisplay';
import AboutUs from '../../Footer/AboutUs';
import Faqs from './Faqs';
import Products from './products/Products';
// Todo1:Make TabPanel Duplicate and change into loop wise.

const Tabs = (context) => {
	const { setState, state: { tabs, category },
		config: { tabLabel }} = context;

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
			<TabPanel value="cart"> <Cart { ...context }/> </TabPanel>
			<TabPanel value="favourite"> <FavProductDisplay { ...context }/>
			 </TabPanel>
			<TabPanel value="categoryWise">
				{category && <Display { ...context }/>} </TabPanel>
			<TabPanel value="AboutUs"><AboutUs { ...context }/> </TabPanel>
			<TabPanel value="Faq"><Faqs { ...context }/> </TabPanel>
		</TabContext>);
};

export default Tabs;
