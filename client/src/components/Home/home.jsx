import Intro from '../Intro/intro';
import PostSmall from '../PostSmall/postSmall';
import bannerImage from '/images/banner.jpg';
import * as postsAPI from "../../api/ads-api";
import { useState, useEffect } from 'react';

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsAPI.getAll().then((posts) => setPosts(posts))
    }, []);

    const imageBackground = {
        backgroundImage: `url(${bannerImage})`
    };

    return (
        <>
            <Intro
                title='Sell or buy in one place for free'
                subTitle='Sell ​​what you do not need or buy what you need in one place for free'
                image={imageBackground}
            >
            </Intro>

            <div className="container">
                <div className='section-results'>
                    <div className="container">
                        {posts.map((item) => <PostSmall key={item._id}  {...item} />)}
                    </div>
                </div>
            </div>
        </>
    );
}