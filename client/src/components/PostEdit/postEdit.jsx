import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Intro from "../Intro/intro";
import bannerImage from '/images/banner2.jpg';
import { useNavigate, useParams } from "react-router-dom";
import { useGetOnePost, useEditPosts } from "../../hooks/usePosts";

const addPostSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    description: Yup.string()
        .min(10, 'Too Short!')
        .max(1000, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required')
});

export default function PostEdit() {
    const [image, setImage] = useState('');

    const handleImage = (e) => {
        console.log(e);

        let files = e.target.files;

        for (var i = 0; i < files.length; i++) {
            let file = files[i];
            let reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = () => {
                setImage(reader.result);
            }
        }
    }

    const items = [
        { name: 'House & DIY', icon: 'home' },
        { name: 'Animals', icon: 'pets' },
        { name: 'Electronics', icon: 'phonelink' },
        { name: 'Sports & Hobbies', icon: 'accessibility_new' },
        { name: 'Clothes & Lifestyle', icon: 'face' },
        { name: 'Farming', icon: 'spa' },
        { name: 'Baby & Kinds', icon: 'child_care' },
        { name: 'Cars & Motor', icon: 'drive_eta' },
        { name: 'Business', icon: 'business' },
        { name: 'Holidays & Tickets', icon: 'beach_access' },
        { name: 'Lost & Found', icon: 'sentiment_dissatisfied' },
        { name: 'Music & Education', icon: 'music_note' },
        { name: 'Other', icon: 'more' },
        { name: 'Property', icon: 'store' },
        { name: 'Work', icon: 'work' },
    ]
    const { postId } = useParams();
    const [post] = useGetOnePost(postId);
    const navigate = useNavigate();
    const editPost = useEditPosts();
    const imageBackground = {
        backgroundImage: `url(${bannerImage})`
    };

    return (
        <>
            <Intro
                title='Edit Post'
                image={imageBackground} />

            <div className='section-create-ad pt-4 pb-4'>
                <div className="container">
                    <div className="section__body">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="section__content">
                                    <Formik
                                        enableReinitialize={true}
                                        initialValues={{ ...post, image: '' }}
                                        validationSchema={addPostSchema}
                                        onSubmit={values => {
                                            const postImage = image !== '' ? image : post.image;
                                            try {
                                                editPost({ ...values, image: postImage  }, post._id).then((postData) => {
                                                    navigate(`/post/${postData._id}`);
                                                })
                                            } catch (error) {
                                                console.log(error);
                                            }
                                        }}
                                    >
                                        {({ errors, touched }) => {
                                            return (
                                                <Form className='form-add card'>
                                                    <div className="form__head card-header">
                                                        <h4 className='card-title'>
                                                            Edit post
                                                        </h4>
                                                    </div>

                                                    <div className="from__body card-body">
                                                        <div className="form-row">
                                                            <div className="form-group col">
                                                                <label htmlFor="title">Ad Title *</label>

                                                                <Field className="form-control" id="title" placeholder="Title" name="title" required />
                                                                {errors.title && touched.title ? (
                                                                    <div className="alert alert-warning">{errors.title}</div>
                                                                ) : null}
                                                            </div>
                                                        </div>

                                                        <div className="form-row ">
                                                            <div className="form-group col">
                                                                <label htmlFor="category-select">Category *</label>

                                                                <Field id='category-select' className="custom-select" component="select" name="category">
                                                                    {
                                                                        items.map((item, index) =>
                                                                            <option key={index}>
                                                                                {item.name}
                                                                            </option>
                                                                        )
                                                                    }

                                                                    {errors.category && touched.category ? (
                                                                        <div className="alert alert-warning">{errors.category}</div>
                                                                    ) : null}
                                                                </Field>
                                                            </div>
                                                        </div>

                                                        <div className="form-row">
                                                            <div className="form-group col-md-6 col-sm-12">
                                                                <label htmlFor="price">Price *</label>

                                                                <Field className='form-control' placeholder='0$' name="price" id="price" />
                                                                {errors.price && touched.price ? (
                                                                    <div className='alert alert-warning'>{errors.price}</div>
                                                                ) : null}
                                                            </div>

                                                            <div className="form-group col-md-6 col-sm-12">
                                                                <label htmlFor="condition">Condition *</label>

                                                                <Field name='condition' component="select" id='condition-select' className="custom-select">
                                                                    <option name='condition'>New</option>
                                                                    <option name='condition'>Used</option>
                                                                </Field>
                                                            </div>
                                                        </div>

                                                        <div className="form-row">
                                                            <div className="form-group col">
                                                                <label htmlFor="description">Description *</label>

                                                                <Field component='textarea' className="form-control" id="description" name='description' placeholder='text here..' rows="3" required />
                                                                {errors.description && touched.description ? (
                                                                    <div className='alert alert-warning'>{errors.description}</div>
                                                                ) : null}
                                                            </div>
                                                        </div>

                                                        <div className="form-row">
                                                            <div className="form-group col-md-6 col-sm-12">
                                                                <label htmlFor="location">Location *</label>

                                                                <Field type="text" name="location" id="location" placeholder='Ireland' className='form-control' />
                                                                {errors.location && touched.location ? (
                                                                    <div className='alert alert-warning'>{errors.location}</div>
                                                                ) : null}
                                                            </div>

                                                            <div className="form-group col-md-6 col-sm-12">
                                                                <label htmlFor="phone">Phone Number *</label>

                                                                <Field type="text" name="phoneNumber" id="phone" placeholder='083XXXXXXX' className='form-control' />
                                                                {errors.phoneNumber && touched.phoneNumber ? (
                                                                    <div className='alert alert-warning'>{errors.phoneNumber}</div>
                                                                ) : null}
                                                            </div>
                                                        </div>

                                                        <div className="form-row">
                                                            <div className="form-group col">
                                                                <label htmlFor="email">Email *</label>

                                                                <Field type="email" name="email" placeholder='example@gmail.com' id="email" className='form-control' />
                                                                {errors.email && touched.email ? (
                                                                    <div className='alert alert-warning'>{errors.email}</div>
                                                                ) : null}
                                                            </div>
                                                        </div>

                                                        <div className="form-row">
                                                            <div className="custom-file">
                                                                <Field onChange={handleImage} type="file" className="custom-file-input" name='image' id="image" />

                                                                <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>

                                                                {!image && touched.image ? (
                                                                    <div className='alert alert-warning'>Required</div>
                                                                ) : null}
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="form-actions card-footer">
                                                        <button type="submit" className="btn btn-primary">
                                                            Edit
                                                        </button>
                                                    </div>
                                                </Form>
                                            )
                                        }}
                                    </Formik>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="section__aside">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className='card-title'>
                                                Terms and Conditions
                                            </h4>
                                        </div>

                                        <div className="card-body">
                                            <ul className="list-terms list-unstyled widget-spec  mb-0">
                                                <li>
                                                    <i className="material-icons">check</i>
                                                    Money Not Refundable
                                                </li>

                                                <li>
                                                    <i className="material-icons">check</i>

                                                    You can renew your Premium ad after experted.
                                                </li>

                                                <li>
                                                    <i className="material-icons">check</i>

                                                    Premium ads are active for depend on package.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className='card-title'>
                                                Benefits of Premium Ad
                                            </h4>
                                        </div>

                                        <div className="card-body">
                                            <ul className="list-terms list-unstyled widget-spec  mb-0">
                                                <li>
                                                    <i className="material-icons">check</i>
                                                    Premium Ads Active
                                                </li>

                                                <li>
                                                    <i className="material-icons">check</i>

                                                    Premium ads are displayed on top
                                                </li>

                                                <li>
                                                    <i className="material-icons">check</i>

                                                    Premium ads will be show in Google results
                                                </li>

                                                <li>
                                                    <i className="material-icons">check</i>

                                                    Premium ads Active
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className='card-title'>
                                                Safety Tips For Buyers
                                            </h4>
                                        </div>

                                        <div className="card-body">
                                            <ul className="list-terms list-unstyled widget-spec  mb-0">
                                                <li>
                                                    <i className="material-icons">check</i>
                                                    Meet Seller at public Place
                                                </li>

                                                <li>
                                                    <i className="material-icons">check</i>

                                                    Check item before you buy
                                                </li>

                                                <li>
                                                    <i className="material-icons">check</i>

                                                    Pay only after collecting item
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}