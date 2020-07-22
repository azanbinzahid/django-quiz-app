import React, {useEffect, useCallback} from 'react'
import {useSelector, connect} from 'react-redux'
import {Switch, Route, Link } from "react-router-dom";
import {autoLogin, logUserOut} from 'redux/actions'
import Login from 'components/Login'
import Signup from 'components/Signup'
import ShowBlogs from 'components/ShowBlogs'
import Form from 'components/Form'
import ProtectedRoute from 'components/ProtectedRoute'


const MyRouter = (props) => {
  const userReducer = useSelector(state => state.userReducer)
  
  useEffect(() => {
    props.autoLogin()
  }, [])

  const handleLogout = useCallback(() => {
    props.logUserOut()
  })

  return (
          <div className="App">
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

            <div className="content-wrapper">
              <div className="content-inner">
                <Switch>
                  <Route exact path='/' component={Login} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                  <ProtectedRoute path="/blogs" component={ShowBlogs} />
                  <ProtectedRoute path="/write" component={Form} />
                </Switch>
              </div>     
            </div>
          </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
      autoLogin: () => dispatch(autoLogin()),
      logUserOut: () => dispatch(logUserOut())
  }
}

export default connect(null, mapDispatchToProps)(MyRouter);
