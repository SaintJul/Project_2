import React from 'react'
import './App.css';
import Header from './components/Header'
import Statement from './components/Statement'
import FetchGet from './components/FetchGet'
import UserInfo from './components/UserInfo'


function UserInfo(){
   console.log("FetchPost")
   
  
  return(
    <React.Fragment>
    <h1>Post an Art piece you'd like to add</h1>
    <form onSubmit = {}>      
      <label >Username:</label>
      <input type  ="text" name = "user"/>     
      
      <label >    Link:</label>
      <input name = "link"/>

      <input value = "Submit" type ="submit"/>    
    </form>
   </React.Fragment>
   
  )
}

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Statement/>
      <FetchGet/>
      <UserInfo/>      
    </React.Fragment>
  );
}

export default App;
