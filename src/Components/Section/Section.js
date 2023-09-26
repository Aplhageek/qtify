import React, { useState } from 'react'
import styles from './Section.module.css';
import { CircularProgress } from '@mui/material';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import Tab from '../Tabs/Tab';

const Section = ({ title, data, toggle, listOfGenre, handleSelect }) => {
    const [caraousalToggle, setCarousalToggle] = useState(true);

    const handleToggle = () => {
        setCarousalToggle(!caraousalToggle);
    }

    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.header}>
                <h3>{title}</h3>
                {toggle && <h4 className={styles.toggleText} onClick={handleToggle}> {caraousalToggle ? "Show All" : "Collapse ALL"} </h4>}
            </div>
            <div className={styles.tab_container}>
                {!toggle && <Tab  listOfGenre={listOfGenre} handleSelect={handleSelect}/>

                }
            </div>
            <div className={styles.loading}>

                {
                    data?.length === 0 ? <CircularProgress /> :

                        (
                            <div className={styles.cardWrapper}>
                                {!caraousalToggle ?
                                    <div className={styles.wrapper}>
                                        {data.map(item => <Card key={item.id} data={item} type="album" />)}
                                    </div>
                                    :
                                    (   
                                        <Carousel data={data} componentRender={(ele) => <Card key={ele.id} data={ele} type="album" /> } /> 
                                    )}
                            </div>
                        )
                }


            </div>

        </section>
    )
}

export default Section