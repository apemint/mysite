import React from 'react'
import Project from '../../components/Project'
import projectList from '../../assets/projectList'

function ProjectsPage() {
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">Projects</h1>
                    </div>
                </>
                <div className="row">
                {projectList && projectList.map((x) => 
                <Project id={x.id} image={x.image} url={x.url} name={x.name} skills={x.skills}/>
                )}
                </div>
            </div>
        </>
    )
}

export default ProjectsPage;