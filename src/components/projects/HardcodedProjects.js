import React from "react";

const HardcodedProjects = ({hardCode})=>{
    // console.log(hardCodes)
    return(
    <div>
       <div to={'/project/'+ hardCode.id} key={hardCode.id} className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{hardCode.title}</span>
                <p>Posted by {hardCode.authorFirstName ? hardCode.authorFirstName +" "+ hardCode.authorLastName :'GLT'} </p>
                <p className="grey-text">6th March, 9.31pm</p>
            </div>
        </div>
    </div>
    )}

    export default HardcodedProjects