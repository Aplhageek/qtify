import React, { useEffect, useState } from 'react'
import styles from './Section.module.css';
import { CircularProgress } from '@mui/material';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import Tab from '../Tabs/Tab';

const Section = ({ title, data, toggle, listOfGenre }) => {
    const [caraousalToggle, setCarousalToggle] = useState(true);
    const [genreKey, setGenreKey] = useState("All");
    const [filteredSongs, setFilteredSongs] = useState({});
    
    const handleSelect = (event, key) => {
        event.preventDefault();
        setGenreKey(key);
    }

    const handleToggle = () => {
        setCarousalToggle(!caraousalToggle);
    }

    const filterSongsByGenre = (allSongs, allGenres) => {
        allGenres?.forEach(genre => {
          let currKey = genre.key;
          const newArray = allSongs.filter(song => song.genre.key === currKey);
          setFilteredSongs(prev => ({ ...prev, [currKey]: newArray }))
        });
    }

      useEffect(() => {
        filterSongsByGenre(data, listOfGenre);
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [genreKey]);

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
                                        <Carousel data={genreKey === "All" ? (data) : (filteredSongs[genreKey]) } componentRender={(ele) => <Card key={ele.id} data={ele} type="album" /> } /> 
                                    )}
                            </div>
                        )
                }


            </div>

        </section>
    )
}

export default Section