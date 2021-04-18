import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MySkills from "../../components/MySkills";
import skillsList from '../../assets/skillsList';


function Skills() {

    return (
        <Container fluid align='center' data-aos='fade-up' id="Skills">
            <Row>
                <Col>
                    <div className='padded'>
                        <h1 className='border-custom'>Skills</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="row justify-content-center">
                        {skillsList && skillsList.map((x) =>
                            <MySkills   name={x.name} icon={x.icon} />
                        )}
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default Skills;