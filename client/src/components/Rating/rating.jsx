import styles from './rating.module.scss';

export default function Rating() {
    return (
        <>
            <div className={`card ${styles.rating}`}>
                <div className={`${styles.rating__head} card-header`}>
                    <h3 className='card-title'>
                        Rating And Reviews
                    </h3>
                </div>

                <div className={`card-body ${styles.rating__body}`}>
                    <ul className={styles.listRating}>
                        <li>
                            <p className={styles.star}>
                                <strong>
                                    1
                                </strong>

                                <i className="material-icons">star_rate</i>
                            </p>

                            <div className={`${styles.progress} progress`}>
                                <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="69" aria-valuemin="0" aria-valuemax="100">
                                    69
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
