import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import { ReactComponent as RigthArrow } from '../../assets/rightArrow.svg';
import styles from './Carousel.module.css'

const CarouselRightNavifation = () => {
    const swiper  = useSwiper()
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() =>{
        swiper.on("slideChange", () => setIsEnd(swiper.isEnd));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


  return (
    <>
        {!isEnd && <RigthArrow className={styles.rigthNavigation} onClick={() => swiper.slideNext()}/> } 
    </>
  )
}

export default CarouselRightNavifation;