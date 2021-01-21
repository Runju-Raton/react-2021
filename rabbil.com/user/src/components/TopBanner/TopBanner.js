import React, { Component, Fragment } from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../../asset/css/custom.css'

class TopBanner extends Component {
    render() {
        return (

            <Fragment>
                <Navbar fixed="top">
                    <Navbar.Brand href="#home">Runju Raton</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Services</Nav.Link>
                        <Nav.Link href="#pricing">Courses</Nav.Link>
                        <Nav.Link href="#pricing">portfolio</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>

                </Navbar>
                <Container fluid className="topFixedBanner fluid">
                    <div className="topBannerOverlay">
                        <div className="title">
                            <h2>Website Designer and Developer</h2>
                            <h5>Mobile and Web Application</h5>
                            <button className="btn btn-primary mt-2">More Info</button>
                        </div>
                    </div>

                </Container>
            </Fragment>

        );
    }
}

export default TopBanner;