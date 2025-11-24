import styles from  './gallery.module.scss'

export default function Gallery({ title, _createdOn, location, category, imageBackground, viewCount, price, favorite }) {
    return (
        <>
            <div className={`card ${styles.gallery}`}>
                <div className={styles.gallery__head}>
                    <h3 className={styles.gallery__title}>
                        {title}
                    </h3>
                    
                    <div className={styles.gallery__meta}>
                        <ul className={`d-flex ${styles.listMeta}`}>
                            <li>
                                <i className="material-icons">category</i>
                                
                                <span>
                                    {category}
                                </span>
                            </li>

                            <li>
                                <i className="material-icons">location_on</i>
                                
                                <span>
                                    {location}
                                </span>
                            </li>

                            <li>
                                <i className="material-icons">calendar_today</i>
                                
                                {
                                    <span>
                                        {(new Date(_createdOn)).toLocaleDateString('en-US', 'short')}
                                    </span>
                                }
                            </li>

                            <li>
                                <i className="material-icons">visibility</i>
                                
                                <span>
                                    {viewCount}
                                </span>
                            </li>

                            <li>
                                <i className="material-icons">favorite</i>
                                
                                <span>
                                    {favorite}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className={styles.gallery__body}>
                    <div style={imageBackground} className={styles.gallery__image}>
                        <span className={styles.gallery__price}>
                            <i className="material-icons">euro_symbol</i>
                            
                            {price}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
};
