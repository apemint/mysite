import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Resume() {

    return (
        <Container fluid align='center' data-aos='fade-up' id="Resume">
            <Row>
                <Col>
                    <div className='padded'>
                        <h1 className='border'>Resume</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href ='https://drive.google.com/file/d/1cEbv5HyevkBVI2WNKNrOGVA9iUWQ5x5j/view?usp=sharing' target = "_blank"><h2>Download Pdf</h2></a>
                </Col>
            </Row>

        </Container>
    )
}

export default Resume;