import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Intro from "../Intro/intro";
import bannerImage from '/images/banner2.jpg';
import { useAuthContext } from "../../contexts/AuthContext";
import { useCreatePost } from "../../hooks/usePosts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const addPostSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    category: Yup.string()
      .required('Required'),
    condition: Yup.string()
      .required('Required'),
    description: Yup.string()
      .min(10, 'Too Short!')
      .max(1000, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    location: Yup.string()
      .required('Required'),
    price: Yup.number()
      .integer('Invalid price')
      .required('Required'),
    phoneNumber: Yup.number()
      .integer('Phone number format 085XXXXXXX')
      .required('Required')
});

export default function PostCreate() {
    const handleImage = (e) => {
        
        let files = e.target.files;

        for (var i = 0; i < files.length; i++) {
          let file = files[i];
          let reader = new FileReader();

          reader.readAsDataURL(file);
          reader.onload = () => {
            setImage(reader.result)
          }
        }
        console.log(image);
    }

    const { isAuthenticated, userId } = useAuthContext();

    const [submitted, setSubmitted] = useState({});
    const [image, setImage] = useState('');
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

    const navigate = useNavigate();
    const createPost = useCreatePost();

    const imageBackground = {
        backgroundImage: `url(${bannerImage})`
    };

    return (
        <>
            <Intro
            title='Ad Post'
            image={imageBackground} />

            <div className='section-create-ad'>
                <div className="container">
                    <div className="section__body">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="section__content">
                                    <Formik
                                        initialValues={{
                                            title: '',
                                            category: 'homeanddiy',
                                            price: '',
                                            condition: 'New',
                                            description: '',
                                            location: '',
                                            phoneNumber: '',
                                            email: '',
                                            image
                                        }}

                                    validationSchema={addPostSchema}
                                    
                                    onSubmit={values => {
                                        try {
                                            createPost({ ...values, image, ownerId: userId }).then((postData) => {
                                                navigate(`/post/${postData._id}`);
                                            })
                                        } catch(error) {
                                            console.log(error);
                                        }
                                    }}
                                    >
                                    {({ errors, touched }) => (
                                        <Form className='form-add card'>
                                            <div className="form__head card-header">
                                                <h4 className='card-title'>
                                                    Add post
                                                </h4>
                                            </div>

                                            <div className="from__body card-body">
                                                <div className="form-row">
                                                    <div className="form-group col">
                                                        <label htmlFor="title">Ad Title *</label>
                                                        
                                                        <Field className="form-control" id="title" placeholder="Title" name="title" required/>
                                                            {errors.title && touched.title ? (
                                                                <div className="invalid-feedback">{errors.title}</div>
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
                                                                <div className="invalid-feedback">{errors.category}</div>
                                                            ) : null}
                                                        </Field>
                                                    </div>
                                                </div>
                                            
                                                <div className="form-row">
                                                    <div className="form-group col-md-6 col-sm-12">
                                                        <label htmlFor="price">Price *</label>
                                                        
                                                        <Field className='form-control' placeholder='0$' name="price" id="price" />
                                                            {errors.price && touched.price ? (
                                                                <div className='invalid-feedback'>{errors.price}</div>
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
                                                                <div className='invalid-feedback'>{errors.description}</div>
                                                            ) : null}
                                                    </div>
                                                </div>
                                                
                                                <div className="form-row">
                                                    <div className="form-group col-md-6 col-sm-12">
                                                        <label htmlFor="location">Location *</label>
                                                        
                                                        <Field type="text" name="location" id="location" placeholder='Ireland' className='form-control'  />
                                                            {errors.location && touched.location ? (
                                                                <div className='invalid-feedback'>{errors.location}</div>
                                                            ) : null}
                                                    </div>

                                                    <div className="form-group col-md-6 col-sm-12">
                                                        <label htmlFor="phone">Phone Number *</label>
                                                        
                                                        <Field type="text" name="phoneNumber" id="phone" placeholder='083XXXXXXX' className='form-control'  />
                                                            {errors.phoneNumber && touched.phoneNumber ? (
                                                                <div className='invalid-feedback'>{errors.phoneNumber}</div>
                                                            ) : null}
                                                    </div>
                                                </div>

                                                <div className="form-row">
                                                    <div className="form-group col">
                                                        <label htmlFor="email">Email *</label>
                                                        
                                                        <Field type="email" name="email" placeholder='example@gmail.com' id="email" className='form-control' />
                                                            {errors.email && touched.email ? (
                                                                <div className='invalid-feedback'>{errors.email}</div>
                                                            ) : null}
                                                    </div>
                                                </div>
                                                
                                                <div className="form-row">
                                                    <div className="custom-file">
                                                        <Field onChange={handleImage} type="file" className="custom-file-input" name='image' id="image"/>

                                                        <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                                                        
                                                        { !image && touched.image? (
                                                            <div className='invalid-feedback'>Required</div>
                                                        ) : null }
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                            <div className="form-actions card-footer">
                                                <button type="submit" className="btn btn-primary">
                                                    Submit now
                                                </button>
                                            </div>
                                        </Form>
                                    )}
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