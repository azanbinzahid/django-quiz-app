const defaultState = {
    blogs: []
}


const commentReducer = (state = defaultState, action) => {
    switch(action.type){
        case "SET_BLOGS":
            return {
                blogs : [...action.payload]
            }

        default: return state
    }
}

export default commentReducer