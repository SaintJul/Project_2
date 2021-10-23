import React,{useState} from 'react'
import './App.css';
import Header from './Components/Header'
import Statement from './Components/Statement'
import FetchGet from './Components/FetchGet'
import UserInfo from './Components/UserInfo'
import {Switch, BrowserRouter} from "react-router-dom"





function App() {
  const [page,setPage]  = useState("/home")
  return (
    <React.Fragment> 
      <Switch>
        <BrowserRouter page = "/home">
          <Header changePage = {setPage}/>
        </BrowserRouter>
        <BrowserRouter page = "/about">
          <Statement/>
        </BrowserRouter>
        <BrowserRouter page = "/post">
          <FetchGet/>
          <UserInfo/> 
        </BrowserRouter>        
      </Switch>     
    </React.Fragment>
  );
}

export default App;
