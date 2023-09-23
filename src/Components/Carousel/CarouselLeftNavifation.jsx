import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import styles from './Carousel.module.css';
import { ReactComponent as LeftArrow } from '../../assets/leftArrow.svg';


const CarouselLeftNavifation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange", function(){
                setIsBeginning(swiper.isBeginning);
        }, []);
    })
    return (
        <>
            {!isBeginning && <LeftArrow className={styles.leftNavigation} onClick={() => swiper.slidePrev()} />}
        </>
    )
}

export default CarouselLeftNavifation;