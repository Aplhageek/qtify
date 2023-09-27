import React from 'react'
import styles from './Faq.module.css';
import AccordianComp from '../Accordian/AccordianComp'


const Faq = () => {
  return (
    <div className={styles.accordion_container}>
        <h3 className={styles.faq_heading}>FAQs</h3>
        <AccordianComp />
    </div>
  )
}

export default Faq