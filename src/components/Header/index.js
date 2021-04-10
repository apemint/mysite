import React from "react";
import { Link } from 'react-router-dom';
import Headshot from '../../assets/images/escobar.jpg';
import "./index.css";
import { Container, Navbar, Nav } from 'react-bootstrap'




function Header() {

    // const imageStyle = {
    //     height: "150px",
    //     width: "auto",
    //     borderRadius: "50%"
    // }

    return (
        <>
                <Navbar fixed="top" bg="dark" variant="dark">
                    <Navbar.Brand href="#Home">Andres A. Escobar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                        <Nav.Link href="#Resume">Resume</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>

                    </Nav>
                </Navbar>          
        </>
    )
}
export default Header;