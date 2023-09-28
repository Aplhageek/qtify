import React from 'react'
import styles from './Card.module.css';
import Tooltip from '@mui/material/Tooltip';

const Card = ({data , bool}) => {
    
    console.log('Card ttttttttttttttttoggle:', bool);

    const {image,follows, title, songs} = data;
                return (
                    <Tooltip title={songs?.length} placement="top" arrow >
                    <div className={styles.cardWrapper}>
                        <div className={styles.card}>
                            <img src={image} alt="album" className={styles.card_img} />
                            <div className={styles.banner}>
                                <p className={styles.cardFollows}>
                                    {!bool ? `${data.likes} Likes` : `${follows} Follows`}
                                </p>
                            </div>
                        </div>
                        <div className={styles.cardTitle}>{title}</div>
                    </div>

                    
                    </Tooltip>
                );


}

export default Card;