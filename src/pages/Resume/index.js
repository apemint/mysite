import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Resume() {

    return (
        <Container fluid align='center' data-aos='fade-up' id="Resume">
            <Row>
                <Col>
                    <div className='padded'>
                        <h1 className='border-custom'>Resume</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="links gitLinks">
                <a href ='https://docs.google.com/document/d/19m7d6NafSIiY3tIcaqeJ_L07CVYJnXijmJDk6T9ycXk/export?format=pdf' target = "_blank"><h2>Download Pdf</h2></a>
                </Col>
            </Row>

        </Container>
    )
}

export default Resume;