import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {autoLogin, logUserOut} from '../redux/actions'

const ProtectedRoute = (props) => {
    const userReducer = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(autoLogin())
      }, [])


    const Component = props.component;
    const isAuthenticated = userReducer.loggedIn;
    // const isAuthenticated = localStorage.getItem('token');

    
    console.log(isAuthenticated)
      
    // return <Component/>
    
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );

}

export default ProtectedRoute;