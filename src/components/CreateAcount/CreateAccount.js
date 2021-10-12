import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import facebook from '../../Images/Icon/fb.png'
import google from '../../Images/Icon/google.png'
import './CreateAccount.css'
import {
    firebaseInitilazed, userWithEmailAndPassword
} from './CreateAccountManager';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
firebaseInitilazed();

const CreateAccount = () => {

    const [user, setUser] = useState({
        displayName: '',
        email: '',
        createPassword: '',
        password: '',
        isLoggedIn: false,
        photoUrl: '',
        success: '',
        error: ''
    });

    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const history = useHistory();

    const handleSubmit = (e) => {

        if (user.displayName && user.email && user.password) {
            userWithEmailAndPassword(user.displayName, user.email, user.password)
                .then((res) => {

                    if (res.success) {
                        setUser(res);
                        setloggedInUser(res);
                        console.log("Response : ", loggedInUser);
                        history.push("/login");
                    } else {
                        const loggedInError = { ...loggedInUser };
                        loggedInError.error = "Please enter correct email";
                        setloggedInUser(loggedInError);
                    }
                })
        }
        e.preventDefault();
    }

    const handleBlur = (e) => {
        let isFieldValid;

        if (e.target.name === 'displayName') {
            isFieldValid = e.target.value.length ? true : false;
            console.log(isFieldValid);
        }

        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(isFieldValid);
        }

        if (e.target.name === 'createPassword') {
            isFieldValid = e.target.value.length > 6 && /\d{1}/.test(e.target.value);
            console.log(isFieldValid);
        }

        if (e.target.name === 'password') {
            const val = e.target.value.length > 6 && /\d{1}/.test(e.target.value);
            isFieldValid = val && user.createPassword === e.target.value;
            console.log(isFieldValid);
        }

        if (isFieldValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        } else {
            const newUser = { ...user };
            newUser[e.target.name] = '';
            setUser(newUser);
        }
    }



    return (

        <div className="pt-5 text-center">
            {
                loggedInUser.success &&
                <Link to="/login"></Link>
            }
            <form
                className="loginForm mt-5 p-4 text-start"
                style={{ width: '18rem' }}
                onSubmit={handleSubmit}
            >
                <h5>Create a new user account</h5>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '33ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField
                        required
                        label="Full Name"
                        type="text"
                        name="displayName"
                        variant="standard"
                        onBlur={handleBlur}
                    />
                    {
                        ((!user.displayName && user.email)) &&
                        <p style={{ color: 'green' }}>
                            <FontAwesomeIcon style={{ color: 'red' }} className="me-2" icon={faExclamationCircle} />
                            <span style={{ color: 'red', fontSize: '5px' }}> Please enter your name </span>
                        </p>

                    }
                    <TextField
                        required
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="current-email"
                        variant="standard"
                        onBlur={handleBlur}
                    />

                    {
                        ((user.displayName && !user.email && user.createPassword) || (user.createPassword && !user.email)) &&
                        <p style={{ color: 'green' }}>
                            <FontAwesomeIcon style={{ color: 'red' }} className="me-2" icon={faExclamationCircle} />
                            <span style={{ color: 'red', fontSize: '5px' }}> Please a valid email address</span>
                        </p>

                    }

                    {
                        loggedInUser.error &&
                        <p style={{ color: 'green' }}>
                            <FontAwesomeIcon style={{ color: 'red' }} className="me-2" icon={faExclamationCircle} />
                            <span style={{ color: 'red', fontSize: '5px' }}> Please a valid email address</span>
                        </p>

                    }

                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name="createPassword"
                        autoComplete="current-password"
                        variant="standard"
                        onBlur={handleBlur}
                    />
                    <TextField
                        required
                        id="outline-password-input"
                        label="Confirm Password"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        variant="standard"
                        size="small"
                        onBlur={handleBlur}
                    />
                </Box>
                {
                    user.createPassword && user.password &&
                    <p style={{ color: 'green' }}>
                        <FontAwesomeIcon className="me-2" icon={faCheck} />
                        <span style={{ fontSize: '5px' }}>password matched</span>

                    </p>

                }

                {
                    user.createPassword && !user.password &&
                    <p style={{ color: 'red' }}>
                        <FontAwesomeIcon style={{ color: 'red' }} className="me-2" icon={faExclamationCircle} />
                        <span style={{ color: 'red', fontSize: '5px' }}> Please match password </span>
                    </p>

                }

                <input type="submit" className="btn mt-4 btn-danger form-control" value="Create account" />
                <p className="mt-3 text-center">
                    Already have an account ?
                    <Link className="createAccount" to="/login">Login</Link>
                </p>
            </form>

            <div className="d-flex justify-content-center mt-4 text-center">
                -------------------- <h5>or</h5> ----------------------
            </div>

            <div className="mb-2 mt-2">
                <button className="btn myBtn pe-5 rounded-pill">
                    <img className="me-5" src={google} alt="" />
                    Continue with Google
                </button>
            </div>

            <div className="mb-5">
                <button className="btn myBtn pe-5 rounded-pill">
                    <img className="me-5" src={facebook} alt="" />
                    Continue with FaceBook
                </button>
            </div>


        </div >
    );
};

export default CreateAccount;
