import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Project = ({ id, image, name, url, skills }) => {
    return (

        <Card fluid align='center' className='border-0' data-aos='fade-up' style={{ width: '18rem', backgroundColor:'transparent'}}>
            <Card.Img className=' mx-auto' src={image} alt={`${id}`} style={{height:'150px', width:'150px', borderRadius:'50%', backgroundColor:'transparent'}}/>
            <Card.Body >
                <Card.Text >
                <a title={url} className="project-name " rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
            { skills && <h3>{skills.map(skill => skill)}</h3> }
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Project;

