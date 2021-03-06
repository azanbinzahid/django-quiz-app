import React,  {useEffect, useCallback} from 'react'
import {useSelector, connect} from 'react-redux'
import {getBlogs, deletePost} from 'redux/actions'

const ShowBlogs = (props) =>  {
    const commentReducer = useSelector(state => state.commentReducer)
    const userReducer = useSelector(state => state.userReducer)
    
    useEffect(() => {
      props.getBlogs()
    }, [])

    const handleDelete = useCallback((postId) => {
        props.deletePost(postId)
    })

    

    if (userReducer.loggedIn) {
    let allBlogs = commentReducer.blogs.map((blog)=>{
        return (
            <div key={blog.id} className="col-6 border border-primary">
                <h3>Title: {blog.title}</h3>
                <button onClick={() => handleDelete(blog.id)}> X </button>
                <h5>Author: {blog.author}</h5>
                <p>{blog.body}</p>
            </div>
        )
    })
    return (
    <div>
        <div className="row">
        {allBlogs}
        </div>
    </div>)
    } else {
        return <div> Please Login or Signup First Before Accessing this Page </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBlogs: () => dispatch(getBlogs()),
        deletePost: (postId) => dispatch(deletePost(postId))
    }
}

export default connect(null, mapDispatchToProps)(ShowBlogs);
