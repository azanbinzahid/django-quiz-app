import React from 'react'
import {BrowserRouter} from "react-router-dom";
import MyRouter from 'components/MyRouter';
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <MyRouter />
   </BrowserRouter>
  )
}

export default App;
