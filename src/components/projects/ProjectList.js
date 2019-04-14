import React from "react";
import ProjectSummary from "./ProjectSummary";
import {Link} from "react-router-dom";
import HardcodedProjects from "./HardcodedProjects";

const ProjectList = ({projects, hardCodes})=>{
console.log(hardCodes,projects)
  // const List= <span>Default items list</span>
    return(
      <div className="project-list section">
        <div>
          {projects && projects.map(project=>{
            return (
              <Link to={'/project/'+ project.id} key={project.id}>
                <ProjectSummary project={project}/>
              </Link>
            )
          })}     
        </div>
        <div className="grey-text">
          {(hardCodes && hardCodes.map(hardCode=>{
              return (
                <Link to={'/project/'+ hardCode.id} key={hardCode.id}>
                  <HardcodedProjects hardCode={hardCode}/>
                </Link>
              )
            })
          )}
        </div>
      </div>  
    )
}

export default ProjectList