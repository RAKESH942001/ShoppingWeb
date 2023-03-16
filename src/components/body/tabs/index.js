/* eslint-disable max-lines-per-function */
import React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import TabPanels from './TabPanels';
// Todo1:Make TabPanel Duplicate and change into loop wise.

const Tabs = (context) => {
	const { setState, state: { tabs },
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
			{tabLabel.map((data, key) => {
				const Components = TabPanels[data];

				return <TabPanel key={ key } value={ data }>
					<Components { ...context }/>
				</TabPanel>;
			})}
		</TabContext>);
};

export default Tabs;
