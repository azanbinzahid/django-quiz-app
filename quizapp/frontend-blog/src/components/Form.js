import React, { useCallback,  createRef } from 'react';
import {useDispatch} from 'react-redux'
import {createPost} from 'redux/actions'

 
const Form = () => {
    //create refs
    let authorRef = createRef();
    let titleRef = createRef();
    let contentRef = createRef();
    let categoryRef = createRef();
 
    const dispatch = useDispatch()
    
    
    const handlePost = useCallback((e) => {
        e.preventDefault();
        const post = {
            author: authorRef.current.value,
            title: titleRef.current.value,
            body: contentRef.current.value,
            category: categoryRef.current.value
        }
        dispatch(createPost(post))
    })
 

    return ( 
        <div className="container">
        <form onSubmit={handlePost} className="col-12">
            <div className="form-group">
                <label>Title for the Blog:</label>
                <input type="text" ref={titleRef} className="form-control" placeholder="Title.." />
            </div>

            <div className="form-group">
                <label>Author:</label>
                <input type="text" ref={authorRef} className="form-control" placeholder="Enter your name.." />
            </div>

            <div className="form-group">
                <label>Content:</label>
                <textarea className="form-control" rows="3"cols="25" ref={contentRef} placeholder="Here write your content.."></textarea>
            </div>

            <div className="form-group">
                <label>Category</label>
            <select ref={categoryRef} className="form-control">
                <option value="cars">Cars</option>
                <option value="nature">Nature</option>
                <option value="it">IT</option>
                <option value="books">Books</option>
                <option value="sport">Sport</option>
            </select>
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
        </div>
        );
}
 
export default Form;
