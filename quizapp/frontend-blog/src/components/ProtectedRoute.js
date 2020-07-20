import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {autoLogin} from '../redux/actions'

const ProtectedRoute = (props) => {
    const userReducer = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(autoLogin())
      }, [])


    const Component = props.component;
    const isAuthenticated = userReducer.loggedIn;
    // const isAuthenticated = localStorage.getItem('token'); // other method

    // return <Component/> //bypass authentication
    
    return isAuthenticated ? (
        <Component />
    ) : (
        <Redirect to={{ pathname: '/login' }} />
    );

}

export default ProtectedRoute;
