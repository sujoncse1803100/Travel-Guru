import React from 'react';
import './NavBar.css';

import {
    Navbar,
    Button,
    Nav,
    Form

} from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className=" myNavbar text-white" fixed="top">
                <Navbar.Brand href="#" className="ms-2 text-white">
                    TRAVEL
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
                        <Nav.Link className="text-white navLink" href="#">News</Nav.Link>
                        <Nav.Link className="text-white navLink" href="#">Destination</Nav.Link>
                        <Nav.Link className="text-white navLink" href="#" > Blog</Nav.Link>
                        <Nav.Link className="text-white navLink" href="#" > Contact</Nav.Link>
                    </Nav>
                    <Button className="text-white bg-danger" variant="  me-2">Login</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;