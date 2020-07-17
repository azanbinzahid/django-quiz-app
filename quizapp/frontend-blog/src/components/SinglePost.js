 
import React, { Component } from 'react';
import moment from 'moment';
 
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import renderHTML from 'react-render-html';
 
class SinglePost extends Component {
 
    showPost = (props) => {
 
        const {title, author, body, category, datestamp} = this.props;
        console.log({author})
        return (
                <div className="single_post"> 
                    <h4>Title: {title}</h4>
                    <br/>
                    <p><b>Autor:</b> {author}</p>
                    <br/>
                    <p><b>Content:</b> {body}</p>
                    <br/>
                    <p><b>Category:</b> {category}</p>
                    <br/>
                    <h5>Create At: {moment(datestamp).format('DD MM YYYY')}</h5>
                </div>
        )
 
    }
    render() {
        return (
            <div className=" col-md-10">
                {this.showPost(this.props)} 
            </div>
        );
    }
}
 
 
export default SinglePost;