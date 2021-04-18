import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';
import { FiTwitter} from 'react-icons/fi'
import { AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai'
import { VscGithub} from 'react-icons/vsc'

function Contact() {

    const iconSize = 50;
    const gitHub = 'https://github.com/apemint';
    const linkedIn = 'www.linkedin.com/in/andres-a-escobar';
    const email = '';
    const twitter = 'https://twitter.com/apemint';
    
    return (
        <Container fluid align='center' data-aos='fade-up' id="Contact">
            <Row>
                <Col>
                    <div className='padded'>
                        <h1 className='border-custom'>Contact Me</h1>
                    </div>
                </Col>
            </Row>
            <Row className='bottom-pad'>
                <Col >
                    <h5><AiOutlineMail size={iconSize}/> escobar.andres.alfonso@gmail.com</h5>
                    <a href={gitHub}><VscGithub size={iconSize}/></a>
                    <a href={linkedIn}><AiOutlineLinkedin size={iconSize}/></a>
                    <a href={twitter}><FiTwitter size={iconSize} /></a>
                    

                </Col>
            </Row>



        </Container>
    )
}

export default Contact;