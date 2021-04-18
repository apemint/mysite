import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ProfilePic from '../../assets/images/escobar.jpg'
import './index.css'

function About() {

    return (

        <Container fluid align="center" data-aos='fade-up' id="About">
            <Row>
                <Col className="justify-content-center">
                    <div className='padded'>
                        <h1 className="border-custom">Hello!</h1>
                    </div>

                </Col>

            </Row>
            <Row>
                <Col >
                    <div className="bottom-padding">
                        <img src={ProfilePic} alt="ProfilePic" style={{ height: '300px', maxWidth: 'auto', borderRadius: '50%'}} />
                    </div>
                    <h1> I'm Andres and I am... </h1>
                    <div className="padded border-custom">
                    <p>
                        A Full Stack Web Developer with a background in Russian Language
                        and literature and Economics. Recently has earned a certificate in
                        full stack web development from Rutgers University, which focuses on
                        developing skills in Javascript, jQuery, CSS and React.js among others.
                        Has a particular fascination with React and enjoys the problem solving
                        aspects of coding and trying to make my code dry, efficient and organized.
                        Eager to combine a background in foreign studies and economics, and technical
                        web development skills to build interesting projects with considerations to
                        globalization and international compatibility in mind.

                    </p>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default About;