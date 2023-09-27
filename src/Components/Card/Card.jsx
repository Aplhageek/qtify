import React from 'react'
import styles from './Card.module.css';
import Tooltip from '@mui/material/Tooltip';


const Card = ({data, type}) => {
    console.log(data.songs , "sonsssssssssssssssssssssssssssssssss");
    const getCard = (type) => {
        switch(type){
            case 'album' : {
                const {image,follows, title, songs} = data;
                return (
                    <Tooltip title={songs?.length} placement="top" arrow >
                    <div className={styles.cardWrapper}>
                        <div className={styles.card}>
                            <img src={image} alt="album" className={styles.card_img} />
                            <div className={styles.banner}>
                                <p className={styles.cardFollows}>
                                    {`${follows} Follows`}
                                </p>
                            </div>
                        </div>
                        <div className={styles.cardTitle}>{title}</div>
                    </div>
                    </Tooltip>
                )
            }
            default: return <></>;
        }
    }

    return getCard(type);
}

export default Card;