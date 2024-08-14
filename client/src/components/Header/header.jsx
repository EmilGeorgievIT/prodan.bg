import { Link } from 'react-router-dom';
import logo from '/images/logo.jpeg';
import avatar from '/images/avatar.png';
import { useAuthContext } from '../../contexts/AuthContext';
import styles from '../Header/header.module.scss';


export default function Header() { 
    const { isAuthenticated } = useAuthContext();
    
    return (
        <nav className={`${styles.navigation} navigation navbar navbar-expand-lg`}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className={styles.logo} alt="logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="material-icons">menu</i>
                </button>

                <div className="collapse navbar-collapse navigation-collapse" id="navbarNav">
                    <ul className={`${styles.navbarNav} navbar-nav`}>
                        <li className={`${styles.navItem} nav-item`}>
                            <Link to="/" className="btn btn-outline-primary">
                                <span>
                                    Home
                                </span>
                            </Link>
                        </li>

                        <li  className={`${styles.navItem} nav-item`}>
                            <Link to="/post/create" className="btn btn-outline-primary d-flex">
                                <i className="material-icons">add</i>

                                <span>
                                    Place Ad
                                </span>
                            </Link>
                        </li>

                        <li  className={`${styles.navItem} nav-item`}>
                            <div className="dropdown">
                                <button className={`nav-link ${styles.dropdownBtn} dropdown-toggle`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    <img src={avatar} className={styles['image-profile']} alt="" />

                                    <span>
                                        My profile
                                    </span>

                                </button>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link className={isAuthenticated ? 'dropdown-item sr-only' : 'dropdown-item'} to="/login">
                                        Login
                                    </Link>

                                    <Link className={isAuthenticated ? 'dropdown-item sr-only' : 'dropdown-item'} to='/register'>
                                        Register
                                    </Link>

                                    <Link className={!isAuthenticated ? 'dropdown-item sr-only' : 'dropdown-item'} to='/logout'>
                                        Logout
                                    </Link>

                                    <Link className={!isAuthenticated ? 'dropdown-item sr-only' : 'dropdown-item'} to='/profile'>
                                        My Profile
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}