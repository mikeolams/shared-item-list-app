import React from "react";
import {connect} from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


const ProjectDetails = (props) =>{
    console.log(props);
    
    const id = props.match.params.id;
    const { project,auth } = props;
    console.log(project)
    if(!auth.uid) return <Redirect to='/signin'/>
    
    if (project){
        return(
            <div className="contain section project-details" key={{id}}>
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{project.title} </span>
                    <p>{project.content}</p>
                </div>
                <div className="card-action grey-ligthen-1 grey-text ">
                    <div>Posted by {project.authorFirstName ? project.authorFirstName+' '+ project.authorLastName :'GLT'}</div>
                    <div>6th March, 5.31pm</div>
                </div>
            </div>
        </div>
        )
    }else{
        return(
            <div className="container center">
            <p>Loading project...</p>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps)=>{
    // console.log(state)
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null; 
    return{
        project,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: "projects"}
    ])
)(ProjectDetails)

