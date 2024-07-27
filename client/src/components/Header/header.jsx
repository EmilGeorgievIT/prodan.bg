import { Link } from 'react-router-dom';
import  logo  from '../../../public/images/logo.jpeg';
import { useState } from 'react';
import styles from '../Header/header.module.scss';

export default function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <nav className={`${styles.navigation} navigation navbar navbar-expand-lg`}>
            <div className="container">
                {/* <Link className="navbar-brand" to="/"> */}
                <img src={logo} className={styles.logo} alt="logo" />
                {/* </Link> */}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="material-icons">menu</i>
                </button>

                <div className="collapse navbar-collapse navigation-collapse" id="navbarNav">
                    <ul className={`${styles.navbarNav} navbar-nav`}>
                        <li className={`${styles.navItem} nav-item`}>
                            {/* <Link to="/" className="btn btn-outline-primary"> */}
                                <span>
                                    Home
                                </span>
                            {/* </Link> */}
                        </li>

                        <li  className={`${styles.navItem} nav-item`}>
                            {/* <Link to="/about" className="btn btn-outline-primary"> */}
                                <span>
                                    About Us
                                </span>
                            {/* </Link> */}
                        </li>

                        <li  className={`${styles.navItem} nav-item`}>

                            {/* <Link to="/create/ad" className="btn btn-outline-primary d-flex"> */}
                                {/* <i className="material-icons">add</i> */}

                                <span>
                                    Place Ad
                                </span>
                            {/* </Link> */}

                            {/* <Link className="nav-link" to="/sign-up">Sign Up</Link> */}
                        </li>

                        <li  className={`${styles.navItem} nav-item`}>
                            <div className="dropdown">
                                <button className="nav-link dropdown-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvectors%2Fprofile-placeholder.html&psig=AOvVaw0tAcRuUL8BO7SoMZ-7wISv&ust=1722112899364000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjwks7IxYcDFQAAAAAdAAAAABAE" className={styles['image-profile']} alt="" />

                                    <span>
                                        My profile
                                    </span>

                                </button>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {/* <Link className={isAuthenticated ? 'dropdown-item sr-only' : 'dropdown-item'} to="/login"> */}
                                        Login
                                    {/* </Link> */}

                                    {/* <Link className={isAuthenticated ? 'dropdown-item sr-only' : 'dropdown-item'} to='/register'> */}
                                        Register
                                    {/* </Link> */}

                                    {/* <Link className={!isAuthenticated ? 'dropdown-item sr-only' : 'dropdown-item'} to='/'> */}
                                        Logout
                                    {/* </Link> */}

                                    {/* <Link className={!isAuthenticated ? 'dropdown-item sr-only' : 'dropdown-item'} to='/profile'> */}
                                        My Profile
                                    {/* </Link> */}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}