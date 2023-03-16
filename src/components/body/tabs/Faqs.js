/* eslint-disable max-lines-per-function */
import { React } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faqs = () =>
	<div>
		<Accordion>
			<AccordionSummary
				expandIcon={ <ExpandMoreIcon/> }
			>
				can u recommend foods to start solid for Baby?
			</AccordionSummary>
			<AccordionDetails>
				start with stage 1 foods i.e single Ingredients.
			</AccordionDetails>
		</Accordion>
		<Accordion>
			<AccordionSummary
				expandIcon={ <ExpandMoreIcon/> }
			>
				Are your products only for babies?
			</AccordionSummary>
			<AccordionDetails>
				No,we have a wide range of products for all age groups
			</AccordionDetails>
		</Accordion>
		<Accordion>
			<AccordionSummary
				expandIcon={ <ExpandMoreIcon/> }
			>
				Have u added any preservatives?
			</AccordionSummary>
			<AccordionDetails>
				No our products are natural and preservative free .
			</AccordionDetails>
		</Accordion>
	</div>
  ;

export default Faqs;
