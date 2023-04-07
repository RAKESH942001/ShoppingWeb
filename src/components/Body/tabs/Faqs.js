/* eslint-disable max-len */
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
				Q. Can u recommend foods to start solids for my baby?
			</AccordionSummary>
			<AccordionDetails>
				A: Start with stage 1 foods i.e, single ingredient foods  listed in our website.
			</AccordionDetails>
		</Accordion>
		<Accordion>
			<AccordionSummary
				expandIcon={ <ExpandMoreIcon/> }
			>
				Q. Are your products only for babies?
			</AccordionSummary>
			<AccordionDetails>
				A: No. We have wide range of products from 6+ months to all age groups.
			</AccordionDetails>
		</Accordion>
		<Accordion>
			<AccordionSummary
				expandIcon={ <ExpandMoreIcon/> }
			>
				Q.	Have u added any preservatives?
			</AccordionSummary>
			<AccordionDetails>
				A: A big No. Our products are 100% natural and authentic.
			</AccordionDetails>
		</Accordion>
	</div>
  ;

export default Faqs;
