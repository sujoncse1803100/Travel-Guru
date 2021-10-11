import React from 'react';
import { Card } from 'react-bootstrap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Login.css'
import '../CreateAcount/CreateAccount.css'
import { Link } from 'react-router-dom';
import facebook from '../../Images/Icon/fb.png'
import google from '../../Images/Icon/google.png'

const Login = () => {
    return (
        <div className="pt-5 text-center">
            <Card className="loginForm mt-5 p-4 text-start" style={{ width: '18rem' }}>
                <h5>Login</h5>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '33ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        autoComplete="current-email"
                        variant="standard"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    />
                </Box>
                <div className="mt-2 d-flex justify-content-between">
                    <div>
                        <input type="checkbox" />
                        <span> remember me</span>
                    </div>
                    <div>
                        <Link className="forgotPassword" to="/login">forgot password</Link>
                    </div>
                </div>
                <button className="btn mt-4 btn-danger">Login</button>
                <p>
                    Dont't have an account ?
                    <Link className="createAccount" to="/account">Create an account</Link>
                </p>
            </Card>

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

        </div>
    );
};

export default Login;