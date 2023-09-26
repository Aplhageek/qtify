import React from 'react'
import styles from './Card.module.css';


const Card = ({data, type}) => {

    const getCard = (type) => {
        switch(type){
            case 'album' : {
                const {image,follows, title, songs} = data;
                return (
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
                )
            }
            default: return <></>;
        }
    }

    return getCard(type);
}

export default Card;