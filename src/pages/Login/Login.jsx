import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import Eye from '../../assets/images/Eye.svg';
import Google from "../../assets/images/Google.svg";
import Facebook from "../../assets/images/Facebook.svg";
import ClosedEye from '../../assets/images/ClosedEye.svg';
import RegistrationLoginLeft from "../../components/RegistrationLoginLeft/RegistrationLoginLeft.jsx";
// import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import classes from '../Registration/Registration.module.css';


function Login(){

    const navigate =useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, handleSubmit, reset, formState: { errors }, getValues  } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: "onSubmit",
    });



    const togglePasswordVisibility = () => {
        const password = getValues("password");
        if (password) {
            setPasswordVisible(!passwordVisible);
        }
    };

    const saveData = (data) => {
        console.log(data, "data")
        reset();
        // navigate('/verify');
    };

    // const responseGoogleSuccess = (response) => {
    //     console.log('Login Successful:', response);
    //     // Here you can handle the response, for example, send it to your backend for authentication
    // };
    //
    // const responseGoogleFailure = (error) => {
    //     console.error('Login Failed:', error);
    //     // Handle the error, e.g., display an error message to the user
    // };
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });


    // const [loginFaceBook, setLoginFacebook] = useState(false);
    // const [data, setData] = useState({});
    // const [picture, setPicture] = useState('');
    //
    const responseFacebook = (response) => {
        console.log(response);
        // setData(response);
        // setPicture(response.picture.data.url);
        if (response.accessToken) {
            // setLoginFacebook(true);
        } else {
            // setLoginFacebook(false);
        }
    }

    // const responseFacebook = (response) => {
    //     // Handle the response from Facebook
    //     if (response.accessToken) {
    //         console.log(response.accessToken)
    //         // onLogin(response.accessToken); setAccessToken(token);
    //     } else {
    //         // Handle login failure
    //         console.log('Login failed');
    //     }
    // };
    //
    // const responseFacebook = (response) => {
    //     // Handle the response from Facebook
    //     if (response.accessToken) {
    //         onLogin(response.accessToken);
    //     } else {
    //         // Handle login failure
    //         console.log('Login failed');
    //     }
    // };

    return(
        <div className="wholeLoginRegister">
            <RegistrationLoginLeft/>
            <div className={classes.mainLogin}>
                <h1>Log in to your account</h1>
                <form className={classes.formStyle} onSubmit={handleSubmit(saveData)}>
                    <div className={classes.inputDiv}>
                        <input
                            className={`${classes.inputStyle} ${errors.email && classes.invalid}`}
                            {...register("email", {
                                required: 'Email is required',
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Invalid email address'
                                }
                            })}
                            placeholder="Email"
                        />
                        {errors.email && <span className={classes.error}>{errors.email.message}</span>}
                    </div>
                    <div className={classes.inputDiv}>
                        <div className={`${classes.input} ${errors.password && classes.invalid}`}>
                            <input className={classes.inputPart}
                                {...register("password", {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 8,
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+-])[A-Za-z\d@$!%*+?&-]{8,}$/,
                                        message: 'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit and one special character'
                                    },
                                })}
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Password"
                            />
                            <img className={classes.eyeIcon}
                                 src={passwordVisible ?ClosedEye:Eye} alt={""}
                                 onClick={togglePasswordVisibility} />
                        </div>
                        {errors.password && <span className={classes.error}>{errors.password.message}</span>}
                    </div>
                    <button className={classes.loginBtn} type={"success"}>Sign in</button>
                    <div className="lineDivs">
                        <div className="line"/>
                        <div className="or">or</div>
                        <div className="line"/>
                    </div>
                </form>
                    <button className={classes.googleFacebookBtn} onClick={() => login()}>
                        <img className={classes.icon} src={Google} alt={""}/>Continue with Google
                    </button>
                <FacebookLogin
                    appId="368582428891681"
                    autoLoad={false}
                    scope="public_profile"
                    // fields="name"
                    fields="name,email,picture"
                    callback={responseFacebook}
                    render={renderProps => (
                        <button className={classes.googleFacebookBtn} onClick={renderProps.onClick}>
                            <img className={classes.icon} src={Facebook} alt={""}/>Continue with Facebook
                        </button>
                    )}
                />
                    <div className={classes.alreadyDiv}>
                        <div className={classes.alreadyLeft}>Don’t have an account ?</div>
                        <div className={classes.alreadyRight} onClick={()=>navigate('/register')}>Sign up</div>
                    </div>
            </div>
        </div>
    )
}

export default Login;