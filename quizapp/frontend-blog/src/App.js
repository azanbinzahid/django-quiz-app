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


import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import Login from './components/Login'
import Signup from './components/Signup'
import ShowBlogs from './components/ShowBlogs'
import {autoLogin, logUserOut} from './redux/actions'

class App extends React.Component{

  componentDidMount(){
    this.props.autoLogin()
  }

  handleLogout = (e) => {
    e.preventDefault()
    this.props.logUserOut()
  }

  render(){
    return (
      <div className="App">
            {
              !this.props.userReducer.loggedIn ? <h1>Sign Up or Login To See Blogs!</h1> : <h1>Welcome to Blogs, {this.props.userReducer.user.username}</h1>
            }
          <br/>
          <br/>
          <div className="container">
          <div className="row">
          <div className="col-4">
           
           <Signup/>
           <Login/>
           <button onClick={this.handleLogout} >Logout</button>
           </div>
          <div className="col-8">
           <ShowBlogs/>
           </div>
           </div>
           </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin()),
    logUserOut: () => dispatch(logUserOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);