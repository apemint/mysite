import React from 'react'
import { Card } from 'react-bootstrap'
import '../../index.css'

const MySkills = ({ name, icon}) => {
    return (

        <Card fluid align='center' className='border-0 card-padding' data-aos='fade-up' style={{ width: '10rem', backgroundColor:'transparent'}}>
            <Card.Body >
                <Card.Text >
                    <h2>{icon}</h2>
                    <h5>{name}</h5>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MySkills;