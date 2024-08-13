import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import bannerImage from '../../../public/images/banner2.jpg'
import Intro from '../Intro/intro';


export default function Register() {
    const initialValues = { name: '', email: '', password: '', 'confirm-password': '' };
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const imageBackground = {
        backgroundImage: `url(${bannerImage})`
    };

    const registerHandler = async (values) => {
        if (values.password !== values['confirm-password']) {
            return setError('Password mismatch!');
        };

        try {
            await register(values.name, values.email, values.password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        };
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, registerHandler);
    return (
        <>
            <Intro
                title='Register'
                image={imageBackground}
            />

            <div className="section-auth p-5">
                <div className="container">
                    <form onSubmit={submitHandler} className='form-auth form-login'>
                        <div className="form__head">
                            <h4 className='form__title text-center'>
                                Register
                            </h4>
                        </div>

                        <div className="form__body">
                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputName">Name</label>

                                <input type="text"
                                    name='name'
                                    className="form-control"
                                    value={values.name}
                                    onChange={changeHandler}
                                    id="exampleInputName" aria-describedby="emailHelp"
                                    placeholder="Enter your name" />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputEmail1">Email address</label>

                                <input
                                    type="email"
                                    name='email'
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    value={values.email}
                                    onChange={changeHandler}
                                    placeholder="Enter email" />

                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>


                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputPassword1">Password</label>

                                <input
                                    type="password"
                                    name='password'
                                    value={values.password}
                                    onChange={changeHandler}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password" />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputPassword1">Confirm Password</label>

                                <input
                                    type="password"
                                    name='confirm-password'
                                    value={values['confirm-password']}
                                    onChange={changeHandler}
                                    className="form-control"
                                    id="confirm-password"
                                    placeholder="Password" />
                            </div>

                            {error && (
                                <p className="form-control">
                                    <span>{error}</span>
                                </p>
                            )}

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