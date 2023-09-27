import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styles from './styels.module.css';
import { ReactComponent as AccordionArrow } from '../../assets/AccordionIcon.svg';

export default function BasicAccordion() {
  return (
    <div>
      <Accordion className={styles.accordion_parent} >
        <AccordionSummary
          expandIcon={<AccordionArrow className={styles.accordion_arrow} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={styles.accordion_summury}
        >
          <Typography className={styles.question_text}>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion_parent}>
        <AccordionSummary
          expandIcon={<AccordionArrow className={styles.accordion_arrow}  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={styles.accordion_summury}
        >
          <Typography  className={styles.question_text}>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}