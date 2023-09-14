import React from 'react'
import styles from "./NavBar.module.css"
import Search from '../Search/Search'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'


const NavBar = () => {
  return (
    <nav className={styles.navbar}>  
      {/* <div className="logo">
        <img src="../../assets/logo.png" alt="Logo" />
      </div> */}
      <Logo />
      <Search/>
      <Button>Give Feedback</Button> 
    </nav>
  )
}

export default NavBar