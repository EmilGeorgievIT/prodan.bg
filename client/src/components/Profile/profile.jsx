import { Link } from 'react-router-dom';
import styles from '../Profile/profile.module.scss';

export default function Profile() {
    return (
        <>
            <div className={styles.profile}>
                <div className='container'>
                    <div className="row">
                        <div className="col-12 col-md-3 col-sm-12">
                            <div className={styles.profile__aside}>
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            My Dashboard
                                        </h3>
                                    </div>

                                    <div className={styles.profile__image}>
                                        {/* <img src={image} alt="" /> */}

                                        <input type="file" className={styles.changeImage} id="image" />

                                        <div className={styles.profile__imageHover}>
                                            <i className="material-icons">camera_alt</i>
                                        </div>
                                    </div>

                                    <h5 className='mb-3 text-center font-weight-semibold'>

                                    </h5>

                                    <div className="nav flex-column nav-pills nav-profile" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <a className="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                            <i className="material-icons">person</i> Edit Profile
                                        </a>

                                        <a className="nav-link" id="v-pills-ads-tab" data-toggle="pill" href="#v-pills-ads" role="tab" aria-controls="v-pills-ads" aria-selected="false">
                                            <i className="material-icons">business</i>
                                            My Ads
                                        </a>

                                        <a className="nav-link" id="v-pills-ads-tab" data-toggle="pill" href="#v-pills-favorite" role="tab" aria-controls="v-pills-favorite" aria-selected="false">
                                            <i className="material-icons">favorite</i>

                                            My Favorite
                                        </a>

                                        <a className="nav-link" id="v-pills-edit-tab" data-toggle="pill" href="#v-pills-edit" role="tab" aria-controls="v-pills-edit" aria-selected="false">
                                            <i className="material-icons">edit</i>

                                            Edit My Ads
                                        </a>

                                        <a className="nav-link" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                            <i className="material-icons">message</i>

                                            My Messages
                                        </a>

                                        <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                            <i className="material-icons">settings</i>

                                            Settings
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-9 col-sm-12">
                            <div className="profile__content ">
                                <div className="tab-content card" id="v-pills-tabContent">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            My Profile
                                        </h3>
                                    </div>

                                    <div className="card-body">
                                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-profile-tab">
1
                                        </div>

                                        <div className="tab-pane tab-pane-ads fade justify-content-flex-start d-flex flex-wrap" id="v-pills-ads" role="tabpanel" aria-labelledby="v-pills-ads-tab">
2
                                        </div>

                                        <div className="tab-pane tab-pane-ads fade justify-content-flex-start d-flex flex-wrap" id="v-pills-favorite" role="tabpanel" aria-labelledby="v-pills-favorite-tab">
3
                                        </div>

                                        <div className="tab-pane tab-pane-edit fade justify-content-flex-start d-flex flex-wrap" id="v-pills-edit" role="tabpanel" aria-labelledby="v-pills-edit-tab">
4
                                        </div>

                                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}