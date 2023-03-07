import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React from 'react'
;
import Screen from '../menu/screen/Screen';
const Tabs = (context) => {
	const { setState, state: { tabs }} = context;

	return <TabContext value={ tabs }>
		<Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
			<TabList onChange={ (event, value) => setState((state) => ({
				...state,
				tabs: value,
			})) }
			>
				<Tab label="Item One" value="1"/>
				<Tab label="Item Two" value="2"/>
				<Tab label="Item Three" value="3"/>
			</TabList>
		</Box>
		<TabPanel value="1"><Screen { ...context }/></TabPanel>
		<TabPanel value="2">Item Two</TabPanel>
		<TabPanel value="3">Item Three</TabPanel>
	</TabContext>;
};

export default Tabs;
