// Action Creators

const setUser = (payload) => ({ type: "SET_USER", payload})
const setBlogs = (payload) => ({ type: "SET_BLOGS", payload})

export const logUserOut = () => ({type: "LOG_OUT"})

// Methods

export const fetchUser = (userInfo) => dispatch => {
    fetch(`http://localhost:8000/token-auth/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        // data sent back will in the format of
        // {
        //     user: {},
        //.    token: "aaaaa.bbbbb.bbbbb"
        // }
        console.log("login", data)
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
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
    .then(res => res.json())
    .then(data => {
        // data sent back will in the format of
        // {
        //     user: {},
        //.    token: "aaaaa.bbbbb.bbbbb"
        // }
        let user= {
          "username": data.username
        }
        console.log("signup", data)
        localStorage.setItem("token", data.token)
        dispatch(setUser(user))
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
    .then(res => res.json())
    .then(data => {
        // data sent back will in the format of
        // {
        //     user: {},
        //.    token: "aaaaa.bbbbb.bbbbb"
        // }
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
}

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