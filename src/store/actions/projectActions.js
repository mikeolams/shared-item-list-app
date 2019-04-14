// import { createFirestoreInstance } from "redux-firestore";
// import fbConfig from "../../config/fbConfig";

// const firebaseProps ={
//     fbConfig,
//     createFirestoreInstance
// }

export const createProject = (project) =>{
    return (dispatch, getState, { getFirebase, getFirestore })=> {
        //make an async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName ? profile.firstName:'Mike',
            authorLastName: profile.lastName ? profile.lastName:'Tester',
            authorId:authorId ? authorId: 506,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT', project});
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR', err});
        })
    }
};