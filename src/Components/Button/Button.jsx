import React from 'react'
import styles from './Button.module.css'

const fallBack = 'Click Here'; 

const Button = ({children}) => {
  return (
    <button className={styles.btn}>{children || fallBack}</button>
  )
}

export default Button;