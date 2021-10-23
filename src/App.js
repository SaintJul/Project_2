import React,{useState} from 'react'
import './App.css';
import Header from './Components/Header'
import Statement from './Components/Statement'
import FetchGet from './Components/FetchGet'
import UserInfo from './Components/UserInfo'
import {Switch, Route} from "react-router-dom"





function App() {
  const [page,setPage]  = useState("/")

  return (
    <React.Fragment> 
      <Header changePage = {setPage}/>
        <Switch>          
          <Route path = "/about">
            <Statement/>
          </Route>
          <Route path = "/post">
            <FetchGet/>
            <UserInfo/> 
          </Route>  
        </Switch>     
    </React.Fragment>
  );
}

export default App;
