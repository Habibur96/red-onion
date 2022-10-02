import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png'


const Header = () => {
    return (

        <div className="mx-auto">

            {/* <Link to='/breakFast'>Breakfast</Link>
            <Link to='/lunch'>Lunch</Link>
            <Link to='/dinner'>Dinner</Link>
            <Link to='/footer'>Footer</Link> */}

            <Navbar
                collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container className='fs-3' >
                    <Navbar.Brand style={{ marginRight: 390 }}> <img height={90} src={logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >

                        <Nav >
                            <Nav.Link as={Link} to='/' href="#pricing" style={{ paddingLeft: 40 }}>Home</Nav.Link>
                            <Nav.Link as={Link} to='/login' href="" style={{ paddingLeft: 40 }} >Login</Nav.Link>
                            <Nav.Link as={Link} to='signUp' href="" style={{ paddingLeft: 40 }}>
                                Sign Up
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div >
    );
};

export default Header;