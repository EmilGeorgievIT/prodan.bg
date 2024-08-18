import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useGetOnePost, useDeletePost } from "../../hooks/usePosts";
import { useGetAllComments, useCreateComment } from "../../hooks/useComments";

import Gallery from "../Gallery/gallery";
import Description from "../Description/description";
import Rating from "../Rating/rating";
import Intro from "../Intro/intro";
import UserProfile from "../UserProfile/userProfile";
import Comment from "../Comment/comment";

import banner from  '/images/banner.jpg';
import { useGetOneUser } from "../../hooks/useUsers";
import Modal from "../common/Modal/modal";

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const addCommentSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    comment: Yup.string()
        .min(10, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required')
});

export default function PostDetails() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const {  userId } = useAuthContext();
    const [post] = useGetOnePost(postId);
    const [user] = useGetOneUser(post.ownerId);
    const [comments, dispatch] = useGetAllComments(postId);
    const createComment = useCreateComment();

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
                                        <div className='comment-create card'>
                                            <div className="comment__head card-header">
                                                <h3 className="comment__title card-title">
                                                    Leave a reply
                                                </h3>
                                            </div>

                                            <div className="comment__body card-body">
                                                <Formik
                                                    initialValues={{
                                                        title: '',
                                                        comment: '',
                                                        email: '',
                                                        userId,
                                                        postId
                                                    }}
                                                    validationSchema={addCommentSchema}

                                                    onSubmit={(values, { resetForm }) => {
                                                        try {
                                                            createComment(postId, values).then((newComment) => {
                                                                dispatch({ type: 'ADD_COMMENT', payload: { ...newComment, author: { email } } });
                                                                resetForm();
                                                            });
                                                        } catch (error) {
                                                            console.log(error);
                                                        }
                                                    }}
                                                >
                                                    {({ errors, touched }) => (
                                                        <Form className='comment'>
                                                            <div className="from-group">
                                                                <Field className="form-control" id="title" placeholder="Your Title" name="title" required />

                                                                {errors.title && touched.title ? (
                                                                    <div className="alert alert-warning">{errors.title}</div>
                                                                ) : null}
                                                            </div>

                                                            <div className="from-group">
                                                                <Field type="email" name="email" placeholder='Email address' id="email" className='form-control' />
                                                                {errors.email && touched.email ? (
                                                                    <div className="alert alert-warning">{errors.email}</div>
                                                                ) : null}
                                                            </div>

                                                            <div className="form-group">
                                                                <Field component='textarea' className="form-control" id="comment" name='comment' placeholder='Comment' rows="3" required />
                                                                {errors.description && touched.description ? (
                                                                    <div className="alert alert-warning">{errors.description}</div>
                                                                ) : null}
                                                            </div>

                                                            <button type="submit" disabled={Object.keys(errors).length} className="btn btn-primary btn-sm">Send Reply</button>
                                                        </Form>
                                                    )}
                                                </Formik>
                                            </div>
                                        </div>
                                    )
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