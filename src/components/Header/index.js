import React from "react";
import "./index.css";
import {  Navbar, Nav } from 'react-bootstrap'




function Header() {

    // const imageStyle = {
    //     height: "150px",
    //     width: "auto",
    //     borderRadius: "50%"
    // }

    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="md" className="navbar-custom" variant="dark">
                <Navbar.Brand href="#About">Andres A.Escobar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#Skills">Skills</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                        <Nav.Link href="#Resume">Resume</Nav.Link>
                        <Nav.Link href="#Contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br />
        </>
    )
}
export default Header;