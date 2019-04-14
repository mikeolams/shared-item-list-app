import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component{
    render(){
        console.log(this.props);
        // console.log(this.props.projects);
        if(!this.props.auth.uid) return <Redirect to='/signin'/>

       return(
           <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={this.props.projects}/>
                        <ProjectList hardCodes={this.props.hardCodes}/>
                    </div>
                    <div className="col s12 m5 offset -m1">
                        <Notifications notifications={this.props.notifications}/>
                    </div>
                </div>
           </div>
       ) 
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return{
        projects: state.firestore.ordered.projects,
        hardCodes:state.project.projects,
        auth : state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection:'projects', orderBy:['createdAt', 'desc'] },
        { collection:'notifications', limit:5, orderBy:['time', 'desc'] }  
    ])
)(Dashboard);