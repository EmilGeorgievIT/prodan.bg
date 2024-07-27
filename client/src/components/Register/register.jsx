import { Link } from 'react-router-dom';
import bannerImage from '../../../public/images/banner2.jpg'
import Intro from '../Intro/intro';

export default function Register() {
    const imageBackground = {
        backgroundImage: `url(${bannerImage})`
    };

    const handleChange = ({ target }) => {
        console.log(target);
    }

    return (
        <>
            <Intro
                title='Register'
                image={imageBackground}
            />

            <div className="section-auth p-5">
                <div className="container">
                    <form className='form-auth form-login'>
                        <div className="form__head">
                            <h4 className='form__title text-center'>
                                Register
                            </h4>
                        </div>

                        <div className="form__body">
                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputName">Name</label>

                                <input type="text" name='name' className="form-control" id="exampleInputName" aria-describedby="emailHelp" onChange={handleChange} placeholder="Enter your name" />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputEmail1">Email address</label>

                                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} placeholder="Enter email" />

                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>


                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputPassword1">Password</label>

                                <input type="password" name='password' onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                            <div className="form__actions mb-3">
                                <button type="submit" className="btn btn-block btn-primary mb-2">Submit</button>

                                <ul className="list-login-links">
                                    <li>
                                        Already have an account ?
                                        <Link className='space' to='/login'>
                                            Sign In
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}