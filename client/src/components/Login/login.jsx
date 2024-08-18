import { useNavigate, Link } from "react-router-dom";
import bannerImage from '/images/banner2.jpg'
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import Intro from '../Intro/intro';

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();
    const initialValues = { email: '', password: '' };

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, loginHandler);

    const imageBackground = {
        backgroundImage: `url(${bannerImage})`
    };
    
    return (
        <>
            <Intro
                title='Login'
                image={imageBackground}
            />

            <div className="section-auth p-5">
                <div className='container'>
                    <form onSubmit={submitHandler} className='form-auth form-login'>
                        <div className="form__head">
                            <h4 className='form__title text-center'>
                                Login
                            </h4>
                        </div>

                        <div className="form__body">
                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputEmail1">Email address</label>

                                <input
                                    type="email"
                                    name='email'
                                    className="form-control"
                                    value={values.email}
                                    onChange={changeHandler}
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email" />

                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputPassword1">Password</label>

                                <input type="password" name='password'
                                    value={values.password}
                                    onChange={changeHandler}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password" />
                            </div>

                            <div className="form__actions mb-3">
                                <button type="submit" className="btn btn-block btn-primary">Login</button>

                                <ul className="list-login-links">
                                    <li>
                                        Don't have account ?
                                        <Link className='space' to='/register'>
                                            Sign Up
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