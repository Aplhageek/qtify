import React from 'react'
import styles from './Hero.module.css';
import HeroImage from '../../assets/vibrating-headphone 1.svg'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img src={HeroImage} alt="Hero-img" />
    </div>
  )
}

export default Hero;