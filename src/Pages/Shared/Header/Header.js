import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png'
import './Header.css'


const Header = () => {
    return (
        <Navbar sticky="top" collapseOnSelect expand='lg' bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} height='30px' alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" className='text-light'>Home</Nav.Link>
                    <Nav.Link as={Link} to="about" className='text-light'>About</Nav.Link>
                    <Nav.Link href="home#services" className='text-light'>Services</Nav.Link>
                    <Nav.Link href="home#experts" className='text-light'>Experts</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/login" className='text-light bg-info rounded px-3 text-center'>Sign In</Nav.Link>
                    <Nav.Link as={Link} to="/signup" className='text-light bg-danger rounded px-3 ms-lg-3 mt-3 mt-lg-0 text-center'>Sign Up</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;