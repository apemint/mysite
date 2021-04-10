import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ProfilePic from '../../assets/images/escobar.jpg'

function About() {

    return (

        <Container fluid align="center" data-aos='fade-up'>
            <Row>
                <Col>
                    <h1>About Me</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <img src={ProfilePic} style={{ height: 'auto', maxWidth: '50%', borderRadius:'50%'}} />
                    </div>

                </Col>
                <Col>
                    <p style={{marginRight:'5em'}}>
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
                </Col>
            </Row>
        </Container>
    )
}

export default About;