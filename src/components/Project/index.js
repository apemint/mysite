import React from 'react'

const Project = ({id, image, name, url, skills}) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
            <img src={image} style={{height:'200px', width:'auto'}} alt={`${id}`} />

            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
            { skills && <h3>{skills.map(skill => skill)}</h3> }
        </div>
    )
}

export default Project;