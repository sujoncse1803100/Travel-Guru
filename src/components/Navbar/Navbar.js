import React from 'react';
import './NavBar.css';
import logo from '../../Images/Logo.png';

import {
    Navbar,
    Button,
    Nav,
    Form

} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { borderRadius } from '@mui/system';

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className=" myNavbar text-white" fixed="top">
                <div className="container">
                    <Navbar.Brand href="#" className="ms-2 text-white">
                        <img style={{ backgroundColor: 'white', }} className="navLogo rounded-pill" src={logo} alt="" />
                    </Navbar.Brand>
                    <Form className="d-flex searchBox" >
                        <input
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            className="mr-2 searchBox text-white ps-2"
                        />
                    </Form>
                    <Navbar.Toggle className="navbar-icon" aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll " className="">
                        <Nav
                            className=" my-2 my-lg-0 text-white  ms-auto me-2"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className="text-white navLink" to="/home">Home</Link>
                            <Link className="text-white navLink" to="/"> Destination</Link>
                            <Link className="text-white navLink" to="/">Blog</Link>
                            <Link className="text-white navLink" to="/">Contact</Link>
                        </Nav>

                        <Link to="/login">
                            <Button className="text-white bg-danger" variant="  me-2">Login</Button>
                        </Link>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default NavBar;