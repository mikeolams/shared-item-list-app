import React from "react";
// import moment from "moment";


const ProjectSummary = ({project}) =>{
    console.log(project)
    const time = project.createdAt.seconds
    console.log(time)

    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName ? project.authorFirstName +" "+ project.authorLastName :'GLT'} </p>
                <p className="grey-text">6th March, 9.31pm</p>
            </div>
        </div>
    )
}

export default ProjectSummary