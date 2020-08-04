import React, {useCallback} from 'react'
import {Link} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {logUserOut} from 'redux/actions'


const NavBar = (props) => {

    const handleLogout = useCallback(() => {
        props.logUserOut()
    })

    const userReducer = useSelector(state => state.userReducer)

    return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                <Link className="navbar-brand" to={"/login"}>Hello {userReducer.user.username}</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/login"}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/signup"}>Sign up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/blogs"}>Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/write"}>Write</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={handleLogout} to={"/"}>Logout</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logUserOut: () => dispatch(logUserOut())
    }
  }
  
export default connect(null, mapDispatchToProps)(NavBar);
