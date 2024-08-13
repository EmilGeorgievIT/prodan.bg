import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuthContext } from "../../contexts/AuthContext";
import { useGetOnePost } from "../../hooks/usePosts";

import Gallery from "../Gallery/gallery";
import Description from "../Description/description";
import Rating from "../Rating/rating";
import Intro from "../Intro/intro";
import UserProfile from "../UserProfile/userProfile";

import banner from  '../../../public/images/banner.jpg';
import { useGetOneUser } from "../../hooks/useUsers";

export default function PostDetails() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { postId } = useParams();
    // const [comments, dispatch] = useGetAllComents(projectId);
    // const createComment = useCreateComment();
    const [showProjectDeleteById, setShowProjectDeleteById] = useState(null);
    const { email, userId } = useAuthContext();
    const [post] = useGetOnePost(postId);
    const [user] = useGetOneUser(post?.ownerId);
    
    const { isAuthenticated } = useAuthContext();
    
    const bannerImage = {
        backgroundImage: `url(${banner})`
    }

    const postImage = {
        width: "100%",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: "431px",
        height: '100%',
        backgroundImage: "url(" + post.image + ")"
    };

    return (
        <>
            <Intro
                image={bannerImage}
                title={post.title}
                subTitle={post.description}
            >
            </Intro>

            <section className="section-post-view">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12">
                            <div className="section__content">
                                <Gallery
                                    key={post._id}
                                    imageBackground={postImage || ''}
                                    favorite='3'
                                    {...post}
                                />
                                <Description
                                    description={post.description || ''}
                                />

                                <Rating
                                    rating={post.rating || ''}
                                />

                                {/* {
                                    comments.map(item => (
                                        <Comment
                                            key={item._id}
                                            {...item}
                                        />
                                    ))
                                } */}
                                {/* <AddComment handleComment={this.addCommentFromChild} postId={this.props.match.params.id} /> */}
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="section__aside">
                                <UserProfile
                                    {...user}
                                    joined='1555536805497'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>       
        </>
    );
}