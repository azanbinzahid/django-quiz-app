import React from 'react'
import {connect} from 'react-redux'
import {getBlogs} from '../redux/actions'

class ShowBlogs extends React.Component {
    componentDidMount(){
       this.props.getBlogs() 
    }


    render(){
        if (this.props.userReducer.loggedIn) {
        let titles = this.props.commentReducer.blogs.map((blog)=>{
            return <li key={blog.id}>{blog.title} by {blog.author}</li>
        })
        return (
        <div>
            <h1> Blog Authors </h1>
            <br/>
           <ul> {titles} </ul> 
        </div>)
    } else {
        return <div> </div>
    }
    }
}

const mapStateToProps = (state) => {
    return {
      commentReducer: state.commentReducer,
      userReducer: state.userReducer
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        getBlogs: () => dispatch(getBlogs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowBlogs)