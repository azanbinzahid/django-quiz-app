import React,  {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getBlogs} from '../redux/actions'

const ShowBlogs = () =>  {
    const commentReducer = useSelector(state => state.commentReducer)
    const userReducer = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(getBlogs())
    }, [])
    
    console.log(userReducer)
    console.log(commentReducer)

    if (userReducer.loggedIn) {
    let titles = commentReducer.blogs.map((blog)=>{
        return <li key={blog.id}>{blog.title} by {blog.author}</li>
    })
    return (
    <div>
        <h1> Blog Authors </h1>
        <br/>
        <ul> {titles} </ul> 
    </div>)
    } else {
        return <div> Login first </div>
    }
}

export default ShowBlogs