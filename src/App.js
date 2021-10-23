import React,{useState} from 'react'
import './App.css';
import Nav from './Components/Nav'
import Statement from './Components/Statement'
import FetchGet from './Components/FetchGet'
import UserInfo from './Components/UserInfo'
import {Switch, Route} from "react-router-dom"
import Home from './Components/Home'





function App() {
  const [page,setPage]  = useState("/")

  return (
    <React.Fragment> 
      <Nav changePage = {setPage}/>
        <Switch>          
          <Route path = "/about">
            <Statement/>
          </Route>
          <Route path = "/post">
            <FetchGet/>
            <UserInfo/> 
          </Route>  
          <Route exact path = "/">
            <Home/>
          </Route>
        </Switch>     
    </React.Fragment>
  );
}

export default App;
