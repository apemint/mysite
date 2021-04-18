import React from 'react'
import { Card } from 'react-bootstrap'
import '../../index.css'

const Project = ({ id, image, name, url, skills, deployLink}) => {
    return (

        <Card fluid align='center' className='border-0 card-padding' data-aos='fade-up' style={{ width: '18rem', backgroundColor:'transparent'}}>
            <Card.Img className=' mx-auto' src={image} alt={`${id}`} style={{height:'150px', width:'150px', borderRadius:'50%', backgroundColor:'transparent'}}/>

            <Card.Body >

                <Card.Text className="links">
                <h2 className="gitLinks"><a   rel="external" target="_blank" href={url}>{name}</a></h2>
                <h3 className="deployedLinks"><a  rel="external" target="_blank" href={deployLink} >Deployed Page</a></h3>
            <h6>{skills.map(skills=> skills)}</h6> 
                </Card.Text>

            </Card.Body>

        </Card>
    )
}

export default Project;

