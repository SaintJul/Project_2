import React,{useState} from 'react'
import './App.css'
import Nav from './Components/Nav'
import Statement from './Components/Statement'
import FetchGet from './Components/FetchGet'
import UserInfo from './Components/UserInfo'
import {Switch, Route} from "react-router-dom"
import Home from './Components/Home'


function Links(){
return(
  <React.Fragment>
    <a style = {{color : "tomato", fontSize : "18px", fontWeight:"bold"}} href = "https://github.com/SaintJul/Project_2">Github</a><br/>
    <a style = {{color : "tomato", fontSize : "18px",  fontWeight:"bold"}} href = "https://favor-julius.medium.com/4d393ecad9b8">Medium</a>
  </React.Fragment>
)
}



function App() {
  const [page,setPage]  = useState("/")

  return (
    <React.Fragment> 
      <Nav changePage = {setPage}/>
        <Switch>          
          <Route path = "/about">
            <Home page = {page}/>
            <Statement/>
          </Route>
          <Route path = "/post">
            <FetchGet/>
            <UserInfo/> 
          </Route>  
          <Route exact path = "/">
            <Home/>
            <Links/>
          </Route>
        </Switch>     
    </React.Fragment>
  );
}

export default App;
