import React,  {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getBlogs} from 'redux/actions'

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
    let allBlogs = commentReducer.blogs.map((blog)=>{
        return (
            <div>
            <div className="col-12 border border-primary">
                <h3>Title: {blog.title}</h3>
                <h5>Author: {blog.author}</h5>
                <p>{blog.body}</p>
            </div>
            <br/>
            </div>
        )
    })
    return (
    <div>
        <div className="row">
            <br/>
            <br/>
            <br/>
            <br/>
        {allBlogs}
        </div>
    </div>)
    } else {
        return <div> Please Login or Signup First Before Accessing this Page </div>
    }
}

export default ShowBlogs;
