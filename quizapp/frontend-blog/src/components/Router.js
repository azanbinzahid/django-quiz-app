// import React, { Component } from 'react';
 
// import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';
 
// import {Header, Navigation} from './Layout/Layout';
// import Posts from './Posts';
// import SinglePost from './SinglePost';
// import Form from './Form';
// import EditPost from './EditPost';
 
// class Router extends Component {
//     state = {  
//         posts: []
//     }
 
//     componentDidMount() {
//         this.getPost();
//     }
 
//     getPost = () => {
//         axios.get(`http://localhost:8000/blog/api/blog`)
//              .then( res => {
//                  this.setState({
//                      posts: res.data
//                  }) 
//              })
//     }
 
//     deletePost = (id) => {
//         //console.log(id);
//         axios.delete(`http://localhost:8000/blog/api/blog/${id}/`)
//         .then(res => {
//             if (res.status === 200) {
//                 const posts = [...this.state.posts];
//                 let result = posts.filter(post => (
//                     post.id !== id
//                 ));
//                 this.setState({
//                     posts: result
//                 })
//             } 
//         })
//     }
 
//     createPost = (post) => {
//         let axiosConfig = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 // "Access-Control-Allow-Origin": "*",
//             }
//           };
//         axios.post(`http://localhost:8000/blog/api/blog/`, post, axiosConfig)
//              .then(res => {
//                  if (res.status === 201) {
//                     Swal.fire(
//                         'Post Create',
//                         'It is created correctly.',
//                         'success'
//                     )
 
//                     let postId = {id: res.data.id};
//                     const newPost = Object.assign({}, res.data.post, postId)
 
//                     this.setState(prevState => ({
//                         posts: [...prevState.posts, newPost]
//                     }))
//                  }
//              })
//     }
 
//     editPost = (postUpdate) => {
//         const {id} = postUpdate;
 
//         axios.put(`http://localhost:8000/blog/api/blog/${id}/`, postUpdate)
//              .then(res => {
//                  if (res.status === 200) {
//                     Swal.fire(
//                         'Post Updated',
//                         'The changes were saved correctly.',
//                         'success'
//                     )
 
//                     let postId = res.data.id;
 
// 					const posts = [...this.state.posts];
 
//                     const postEdit = posts.findIndex(post => postId === post.id)
 
//                     posts[postEdit] = postUpdate;
//                     this.setState({
//                         posts 
//                     })
//                  }
//              })
//     }
 
//     render() { 
//         return (  
//             <BrowserRouter>
 
//                 <div className="container">
//                     <Header />
//                     <div className="row justify-content-center">
 
//                         <Navigation />
 
//                         <Switch>
//                             <Route exact path="/" render={ () => {
//                                 return(
//                                     <Posts 
//                                         posts={this.state.posts}
//                                         deletePost={this.deletePost}
//                                     />
//                                 );
//                             }} />
 
//                             <Route exact path="/post/:postId" render={ (props) => {
//                                 let idPost = props.location.pathname.replace('/post/', '')
 
//                                 const posts=this.state.posts;
//                                 let filter;
//                                 filter = posts.filter(post => (
//                                     post.id === Number(idPost)
//                                 ))
 
 
//                                 return(
//                                     <SinglePost 
//                                         post={filter[0]} 
//                                     />
//                                 )
//                             }} />
//                             <Route exact path="/create" render={() => {
//                                 return(
//                                     <Form 
//                                         createPost={this.createPost}
//                                     />
//                                 );
//                             }}
//                             />
//                             <Route exact path="/edit/:postId" render={ (props) => {
//                                 let idPost = props.location.pathname.replace('/edit/', '')
//                                 const posts=this.state.posts;
//                                 let filter;
//                                 filter = posts.filter(post => (
//                                     post.id === Number(idPost)
//                                 ))                                
//                                 return(
//                                     <EditPost
//                                         post={filter[0]} 
//                                         editPost={this.editPost}
//                                     />
//                                 )
//                             }} />                            
//                         </Switch>
//                     </div>
//                 </div>            
//             </BrowserRouter>
//         );
//     }
// } 
// export default Router;



// import React, { Component } from 'react';
// import Router from './components/Router';
 
// class App extends Component {
//   render() {
//     return (
//         <Router />
//     );
//   }
// }
 
// export default App;


// import React, { Component } from 'react';
// import Nav from './components/Nav';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       displayed_form: '',
//       logged_in: localStorage.getItem('token') ? true : false,
//       username: ''
//     };
//   }

//   componentDidMount() {
//     if (this.state.logged_in) {
//       fetch('http://localhost:8000/blog/current_user/', {
//         headers: {
//           Authorization: `JWT ${localStorage.getItem('token')}`
//         }
//       })
//         .then(res => res.json())
//         .then(json => {
//           this.setState({ username: json.username });
//         });
//     }
//   }

//   handle_login = (e, data) => {
//     e.preventDefault();
//     fetch('http://localhost:8000/token-auth/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(res => res.json())
//       .then(json => {
//         localStorage.setItem('token', json.token);
//         this.setState({
//           logged_in: true,
//           displayed_form: '',
//           username: json.user.username
//         });
//       });
//   };

//   handle_signup = (e, data) => {
//     e.preventDefault();
//     fetch('http://localhost:8000/blog/users/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(res => res.json())
//       .then(json => {
//         localStorage.setItem('token', json.token);
//         this.setState({
//           logged_in: true,
//           displayed_form: '',
//           username: json.username
//         });
//       });
//   };

//   handle_logout = () => {
//     localStorage.removeItem('token');
//     this.setState({ logged_in: false, username: '' });
//   };

//   display_form = form => {
//     this.setState({
//       displayed_form: form
//     });
//   };

//   render() {
//     let form;
//     switch (this.state.displayed_form) {
//       case 'login':
//         form = <LoginForm handle_login={this.handle_login} />;
//         break;
//       case 'signup':
//         form = <SignupForm handle_signup={this.handle_signup} />;
//         break;
//       default:
//         form = null;
//     }

//     return (
//       <div className="App">
//         <Nav
//           logged_in={this.state.logged_in}
//           display_form={this.display_form}
//           handle_logout={this.handle_logout}
//         />
//         {form}
//         <h3>
//           {this.state.logged_in
//             ? `Hello, ${this.state.username}`
//             : 'Please Log In'}
//         </h3>
//       </div>
//     );
//   }
// }

// export default App;


import React, {useEffect, useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Login from './Login'
import Signup from './Signup'
import ShowBlogs from './ShowBlogs'
import ProtectedRoute from './ProtectedRoute'
import {autoLogin, logUserOut} from '../redux/actions'
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Router = () => {
//   const userReducer = useSelector(state => state.userReducer)
  const dispatch = useDispatch()
  
  useEffect(() => {
    // dispatch(autoLogin())
  }, [])

  const handleLogout = useCallback(() => {
    dispatch(logUserOut())
  })

  return (
     <BrowserRouter>
         <Switch>
             <Route path="/login" component={Login} />
             <Route path="/signup" component={Signup} />
             <ProtectedRoute exact={true} path="/" component={ShowBlogs} />
             {/* <ProtectedRoute path="/settings" component={Settings} /> */}
             <ProtectedRoute component={ShowBlogs} />
         </Switch>
     </BrowserRouter>
  )
}

export default Router



