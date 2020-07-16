import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {autoLogin, logUserOut} from '../redux/actions'

const ProtectedRoute = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(autoLogin())
      }, [])

    const userReducer = useSelector(state => state.userReducer)

    const Component = props.component;
    const isAuthenticated = userReducer.loggedIn;

    
    console.log(isAuthenticated)
    
    return isAuthenticated ? (
        <Component />
    ) : (
        <Redirect to={{ pathname: '/login' }} />
    );

}

export default ProtectedRoute;