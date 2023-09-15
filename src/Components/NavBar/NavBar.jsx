import React from 'react'
import styles from "./NavBar.module.css"
import Search from '../Search/Search'
import Button from '../Button/Button'
import Logo from '../../assets/logo.png'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>  
      {/* <div className="logo">
        <img src="../../assets/logo.png" alt="Logo" />
      </div> */}
      {/* <img src={require('../../assets/logo.png')}  alt='required' /> */}
      {/* import { ReactComponent as Image } from './Image/Checked.svg'
      <Image /> */}
      <img src={Logo} alt="this is logo" />
      <Search/>
      <Button>Give Feedback</Button> 
    </nav>
  )
}

export default NavBar