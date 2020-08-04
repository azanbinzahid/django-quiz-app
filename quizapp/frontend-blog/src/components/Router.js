import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Switch, Route} from "react-router-dom";
import {autoLogin, logUserOut} from 'redux/actions'
import Login from 'components/Login'
import Signup from 'components/Signup'
import ShowBlogs from 'components/ShowBlogs'
import Form from 'components/Form'
import ProtectedRoute from 'components/ProtectedRoute'
import NavBar from 'components/NavBar'


const Router = (props) => {
  
  useEffect(() => {
    props.autoLogin()
  }, [])


  return (
          <div className="App">
            <NavBar/>
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

export default connect(null, mapDispatchToProps)(Router);
