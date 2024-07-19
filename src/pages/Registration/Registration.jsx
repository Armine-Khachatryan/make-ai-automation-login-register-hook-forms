import React, {useState} from "react";
import Google from '../../assets/images/Google.svg';
import Facebook from '../../assets/images/Facebook.svg';
import RegistrationLoginLeft from "../../components/RegistrationLoginLeft/RegistrationLoginLeft.jsx";
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import classes from './Registration.module.css';
import {useGoogleLogin} from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props.js";


function Registration(){

    const navigate =useNavigate();
    const [showTerms, setShowTerms]=useState(false);

    const setTerms=()=>{
        setShowTerms(showTerms=>!showTerms)
    }

    const { register, handleSubmit, reset, formState: { errors }, getValues  } = useForm({
        defaultValues: {
            name: '',
            surname: '',
            email: '',
            password: '',
            confirm_password:'',
        },
        mode: "onSubmit",
    });


    const saveData = (data) => {
        console.log(data, "data")
        reset();
        navigate('/login');
    };

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

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

    return(
        <div className="wholeLoginRegister">
            <RegistrationLoginLeft showTerms={showTerms} onSetShowTerms={setShowTerms}/>
            <div className={classes.mainRegister}>
                <h1>Your Details</h1>
                <form className={classes.formStyle} onSubmit={handleSubmit(saveData)}>
                    <div className={classes.inputDiv}>
                        <input
                            className={`${classes.inputStyle} ${errors.name && classes.invalid}`}
                            {...register("name", {
                                required: 'Name is required'
                            })}
                            placeholder="Name"
                        />
                        {errors.name && <span className={classes.error}>{errors.name.message}</span>}
                    </div>
                    <div className={classes.inputDiv}>
                        <input
                            className={`${classes.inputStyle} ${errors.surname && classes.invalid}`}
                            {...register("surname", {
                                required: 'Surname is required'
                            })}
                            placeholder="Surname"
                        />
                        {errors.surname && <span className={classes.error}>{errors.surname.message}</span>}
                    </div>
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
                        <input
                            className={`${classes.inputStyle} ${errors.password && classes.invalid}`}
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
                            type={"password"}
                            placeholder="Password"
                        />
                        {errors.password && <span className={classes.error}>{errors.password.message}</span>}
                    </div>
                    <div className={classes.inputDiv}>
                        <input
                            className={`${classes.inputStyle} ${errors.confirm_password && classes.invalid}`}
                            {...register("confirm_password", {
                                required: 'Confirm password is required',
                                minLength: {
                                    value: 8,
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+-])[A-Za-z\d@$!%*+?&-]{8,}$/,
                                    message: 'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit and one special character'
                                },
                                validate: (value) =>
                                    value === getValues('password') ||
                                    'Passwords do not match!',
                            })}
                            type={"password"}
                            placeholder="Confirm password"
                        />
                        {errors.confirm_password && <span className={classes.error}>{errors.confirm_password.message}</span>}
                    </div>
                    <div className={classes.termsDiv}>
                        <input className={classes.checkbox} type="checkbox" id="terms" name="terms" value="terms"/>
                            <label className={classes.checkboxLabel} htmlFor="terms">I agree with the</label>
                        <span className={classes.termsSpan} onClick={setTerms}>Terms and conditions</span>
                    </div>
                    <button className={classes.loginBtn}>Sign up</button>
                </form>
                    <div className="lineDivs">
                        <div className="line"/>
                        <div className="or">or</div>
                        <div className="line"/>
                    </div>
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
                    {/*<button className={classes.googleFacebookBtn}>*/}
                    {/*    <img className={classes.icon} src={Facebook} alt={""}/>Continue with Facebook*/}
                    {/*</button>*/}
                    <div className={classes.alreadyDiv}>
                        <div className={classes.alreadyLeft}>Already have an account</div>
                        <div className={classes.alreadyRight} onClick={()=>navigate('/login')}>Sign in</div>
                    </div>
            </div>
        </div>
    )
}
export default Registration;