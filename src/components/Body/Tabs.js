/* eslint-disable max-lines-per-function */
import React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import TabPanels from './tabs/TabPanels';

const Tabs = (context) => {
	const { setState, state: { tabs },
		config: { tabLabel }} = context;

	return (
		<TabContext value={ tabs }>
			<Box sx={ { borderBottom: 1,
				borderColor: 'divider', marginTop: '50px' } }
			>
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
			<Box>
				{tabLabel.map((data, key) => {
					const Components = TabPanels[data];

					return (
						<TabPanel
							key={ key }
							sx={ { display: 'flex',
								justifyContent: 'center' } }
							value={ data }
						>
							<Components { ...context }/>
						</TabPanel>);
				})}
			</Box>
		</TabContext>);
};

export default Tabs;
