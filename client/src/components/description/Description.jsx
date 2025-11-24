import styles from './description.module.scss';

export default function Description({ description }) {
    return (
        <>
            <div className={`${styles.description} card`}>
                <div className="card-header">
                    <h3 className='card-title'>
                        Description
                    </h3>
                </div>

                <div className="card-body">
                    <pre className='card-description'>
                        {description}
                    </pre>
                </div>

                <div className="card-footer">
                    <ul className={`d-flex ${styles.listLinks}`}>
                        <li>
                            <a href="#" className="btn btn-success btn-sm">
                                <i className="material-icons">share</i>

                                <span>
                                    Shared ad
                                </span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="btn btn-warning btn-sm">
                                <i className="material-icons">warning</i>

                                <span>
                                    Report Abuse
                                </span>
                            </a>
                        </li>

                        <li>
                            <button href="#" className="btn btn-secondary btn-sm">
                                <i className="material-icons">favorite</i>

                                <span>
                                    4353
                                </span>
                            </button>
                        </li>

                        <li>
                            <button href="#" className="btn btn-primary btn-sm">
                                <i className="material-icons">print</i>

                                <span>
                                    Print
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}