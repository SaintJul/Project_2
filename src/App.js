import React from 'react'
import './App.css';
import Header from './Components/Header'
import Statement from './Components/Statement'
import FetchGet from './Components/FetchGet'
import UserInfo from './Components/UserInfo'




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
