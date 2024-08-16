import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";


import { useAuthContext } from "../../contexts/AuthContext";
import { useGetOnePost, useDeletePost } from "../../hooks/usePosts";
import { useGetAllComments } from "../../hooks/useComments";

import Gallery from "../Gallery/gallery";
import Description from "../Description/description";
import Rating from "../Rating/rating";
import Intro from "../Intro/intro";
import UserProfile from "../UserProfile/userProfile";
import Comment from "../Comment/comment";
import AddComment from "../AddComment/addComment";

import banner from  '../../../public/images/banner.jpg';
import { useGetOneUser } from "../../hooks/useUsers";
import Modal from "../common/Modal/modal";

export default function PostDetails() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { postId } = useParams();
    // const createComment = useCreateComment();
    const [showProjectDeleteById, setShowProjectDeleteById] = useState(null);
    const { email, userId } = useAuthContext();
    const [post] = useGetOnePost(postId);
    const [user] = useGetOneUser(post?.ownerId);
    const [comments, dispatch] = useGetAllComments(postId);

    const { isAuthenticated } = useAuthContext();
    
    const isOwner = userId === post?.ownerId;

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


    const postDeleteHandler = async (postId) => {
        const deletePost = useDeletePost();
        await deletePost(postId);
        navigate("/");
    }

    console.log(comments)

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

                                {
                                    comments.map(item => (
                                        <Comment
                                            key={item._id}
                                            {...item}
                                        />
                                    ))
                                }
                                {
                                    isAuthenticated && (
                                        <AddComment
                                    />)
                                }
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="section__aside">
                                <UserProfile
                                    {...user}
                                    joined='1555536805497'
                                />

                                {isOwner && (
                                    <div className='d-flex card'>
                                        <Link to={`/post/edit/${post._id}`} className='btn btn-success btn-sm mb-1'>Edit</Link>
                                        
                                        <button data-toggle="modal" data-target="#removeModal" data-placement="top" title="Remove Post" className=" btn btn-danger btn-sm">
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Modal
                title='Remove ad'
                description='Do you want to remove this ad?'
                submitButtonLabel='Remove'
                onSubmit={() => postDeleteHandler(post._id)}
                idPost={post._id}
            />
        </>
    );
}