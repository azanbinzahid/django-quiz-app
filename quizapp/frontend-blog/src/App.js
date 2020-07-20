import React from 'react'
import {BrowserRouter} from "react-router-dom";
import MyRouter from 'components/MyRouter';


const App = () => {
  return (
    <BrowserRouter>
      <MyRouter />
   </BrowserRouter>
  )
}

export default App;
