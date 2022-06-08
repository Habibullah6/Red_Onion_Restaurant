
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FiShoppingCart } from "react-icons/fi";
import logo from '../../images/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand>
                    <img className='logo' src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                   <Nav.Link className='fw-bold fs-5 text-dark'> <FiShoppingCart/> </Nav.Link>
                   <Nav.Link className='fw-bold text-dark'> Login </Nav.Link>
                   <Nav.Link> <button className='signup-button'> Sign up </button> </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;