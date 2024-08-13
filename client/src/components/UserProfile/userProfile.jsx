import styles from './user-profile.module.scss';
import { Link } from 'react-router-dom';

import facebook from '../../../public/images/facebook.svg';
import twitter from '../../../public/images/twitter.svg';
import linkedin from '../../../public/images/linkedin.svg';
import avatar from '../../../public/images/avatar.png';

export default function UserProfile(
    { _id, firstName, lastName, image, email, website, phoneNumber }
) {
    return (
        <>
            <div className={`card ${styles.userProfile}`}>
                <div className={`card-header ${styles.user__header}`}>
                    <h3 className='card-title'>
                        Post By
                    </h3>
                </div>

                <div className={`card-body ${styles.user__body}`}>
                    <div className="user__image text-center">
                        <img src={avatar} alt="profile-avatar" />
                    </div>

                    <h5 className={`${styles.user__title} text-dark mb-1`}>
                        {firstName} {lastName}
                    </h5>

                    {
                        <p className='user-join text-center text-muted'>
                            Member since {(new Date(Date.now())).toLocaleDateString('en-US', 'short')}
                        </p>
                    }
                    <div className="user__actions text-center">
                        <Link to={`/user/ads/${_id}`} className='btn btn-success btn-user-ads'>
                            See All ads
                        </Link>
                    </div>
                </div>

                <div className={`card-body ${styles.user__body}`}>
                    <h5 className='card-title contact-title mb-2'>
                        Contact Info
                    </h5>

                    <ul className={styles.listContact}>
                        <li>
                            <i className="material-icons">
                                alternate_email
                            </i>

                            <span>
                                {email}
                            </span>
                        </li>

                        {
                            phoneNumber ?
                                <li>
                                    <i className="material-icons">
                                        phone
                                    </i>

                                    <span>
                                        {phoneNumber}
                                    </span>
                                </li>

                                : ''

                        }

                        {
                            website ?
                                <li>
                                    <i className="material-icons">
                                        link
                                    </i>

                                    <span>
                                        {website}
                                    </span>
                                </li>
                                : ''

                        }
                    </ul>

                    <ul className={`list d-flex ${styles.listSocials}`}>
                        <li>
                            <a href="https://www.facebook.com/emil.georgiev.it">
                                <img src={facebook} alt="facebook" width='35' height='35' />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.twitter.com/">
                                <img src={twitter} alt="twitter" width='35' height='35' />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/emil-georgiev-b5464bb9/">
                                <img src={linkedin} alt="linkedin" width='35' height='35' />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="card-footer">
                    <div className="user-actions d-flex">
                        {
                            !!localStorage.getItem('ds_chk_temp') ? (
                                <Link to={`/chat/${_id}`} className='btn btn-primary btn-sm'>
                                    <i className="material-icons">
                                        send
                                    </i>

                                    Chat
                                </Link>
                            ) : ''
                        }

                        <button className='btn btn-success btn-sm'>
                            <i className="material-icons">
                                face
                            </i>

                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}