import React, { useState } from 'react'
import styles from './Section.module.css';
import { CircularProgress } from '@mui/material';
import Card from '../Card/Card';

const Section = ({ title, data }) => {
    const [caraousalToggle, setCarousalToggle] = useState(true);

    const handleToggle = () => {
        setCarousalToggle(!caraousalToggle);
    }

    return (
        <section>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}> {caraousalToggle ? "Show All" : "Collapse ALL"} </h4>
            </div>
            <div className={styles.loading}>

                {
                    data?.length == 0 ? <CircularProgress /> :

                        (
                            <div className={styles.cardWrapper}>
                                {!caraousalToggle ?
                                    <div className={styles.wrapper}>
                                        {data.map(item => <Card key={item.id} data={item} type="album" />)}
                                    </div>
                                    :
                                    (null)}
                            </div>
                        )
                }


            </div>

        </section>
    )
}

export default Section