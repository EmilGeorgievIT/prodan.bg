import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Profile/profile.module.scss';
import * as postsAPI from "../../api/ads-api";
import PostSmall from "../PostSmall/postSmall";
import avatar from '/images/avatar.png';
import { useAuthContext } from "../../contexts/AuthContext";

export default function Profile() {
    const [posts, setPosts] = useState([]);
    const { email, userId } = useAuthContext();

    useEffect(() => {
        postsAPI.getAllByUserId(userId).then((posts) => setPosts(posts))
    }, []);

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
                                        <img src={avatar} alt="" />
                                    </div>

                                    <h5 className='mb-3 text-center font-weight-semibold'>
                                        Email: {email}
                                    </h5>

                                    <div className="nav flex-column nav-pills nav-profile" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <a className="nav-link" id="v-pills-ads-tab" data-toggle="pill" href="#v-pills-ads" role="tab" aria-controls="v-pills-ads" aria-selected="false">
                                            <i className="material-icons">business</i>
                                            My Ads
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
                                            
                                        </div>

                                        <div className="tab-pane tab-pane-ads fade justify-content-flex-start d-flex flex-wrap" id="v-pills-ads" role="tabpanel" aria-labelledby="v-pills-ads-tab">
                                            {posts.map((item) => <PostSmall key={item._id}  {...item} />)}
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