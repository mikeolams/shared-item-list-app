import React  from "react";
import { Link  } from "react-router-dom";
import SignedInlinks from "./SignedInLink";
import SignedOutlinks from "./SignedOutLink";
import { connect } from "react-redux";

const Navbar = (props) =>{
    const {auth, profile} =props;
    console.log(auth);

    const links = auth.uid ? <SignedInlinks profile={profile}/>: <SignedOutlinks/>
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo" >GLTLogo</Link>
               {links}
            </div>
        </nav>
    )

}

const mapStateToProps = (state)=>{
    console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)