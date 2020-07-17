// Action Creators

const setUser = (payload) => ({ type: "SET_USER", payload})
const setBlogs = (payload) => ({ type: "SET_BLOGS", payload})

export const logUserOut = () => ({type: "LOG_OUT"})

// Methods

export const getBlogs = () => dispatch => {
    fetch(`http://localhost:8000/blog/api/blog/`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `JWT ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {
        // console.log("blog", data)
        dispatch(setBlogs(data))
    })
  }

export const fetchUser = (userInfo) => dispatch => {
    fetch(`http://localhost:8000/token-auth/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => {
        if (!res.ok){
            throw new Error(res.status)
        } else {
            return res.json()
        }
    }) 
    .then(data => {
        console.log("login", data)
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
        dispatch(getBlogs())
    })
    .catch((error)=>{
        console.log(error)
    })
}

export const signUserUp = (userInfo) => dispatch => {
    fetch(`http://localhost:8000/blog/users/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => {
        if (!res.ok){
            throw new Error(res.status)
        } else {
            return res.json()
        } 
    })
    .then(data => {
        let user= {
          "username": data.username
        }
        console.log("signup", data)
        localStorage.setItem("token", data.token)
        dispatch(setUser(user))
    })
    .catch((error)=>{
        console.log(error)
    })
}

export const autoLogin = () => dispatch => {
    fetch(`http://localhost:8000/blog/current_user/`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `JWT ${localStorage.getItem("token")}`
        }
    })
    .then(res => {
        if (!res.ok){
            throw new Error(res.status)
        } else {
            return res.json()
        } 
    })
    .then(data => {
        if (data.detail){
          dispatch(logUserOut())
        } else {
        let user= {
          "username": data.username
        }
        console.log("auto", data)
        // localStorage.setItem("token", data.token)
        dispatch(setUser(user))
      }
    })
    .catch((error)=>{
        console.log(error)
    })
}

export const createPost = (post) => dispatch => {
    fetch(`http://localhost:8000/blog/api/blog/`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `JWT ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(post)
    })
    .then(res => {
        console.log(res)
        if (!res.ok){
            console.log(res)
            throw new Error(res.details)
        } else {
            return res.json()
        } 
    })
    .then(data => {
        console.log("write", data)
    })
    .catch((error)=>{
        console.log(error)
    })
}