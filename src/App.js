import React,{useState,useEffect} from 'react'
import './App.css'
import Nav from './Components/Nav'
import Statement from './Components/Statement'
import UserInfo from './Components/UserInfo'
import {Switch, Route} from "react-router-dom"
import Home from './Components/Home'

//Posts Links to Github and Medium
function Links(){
return(
  <React.Fragment>
    <a style = {{color : "tomato", fontSize : "18px", fontWeight:"bold"}} href = "https://github.com/SaintJul/Project_2">Github</a><br/>
    <a style = {{color : "tomato", fontSize : "18px",  fontWeight:"bold"}} href = "https://favor-julius.medium.com/4d393ecad9b8">Medium</a>
  </React.Fragment>
)
}


// Organizes the project
function App() {
  const [pics, setPics] = useState("")

function Post({pics}){
  const picCards = pics.map((pic, index) =>(
    <div className = "cardPosts" key = {index}>
      <h3 className = "postsHeader">{pic.name}</h3>
      <img id = "post"
      width = "150" 
      height = "150" 
      alt = "api images"
      src= {pic.piece}/>
    </div>
  ))

  return(
    <div>
      {picCards}
    </div>
  )
}


  //Fetch for my favorite Artists data[Math.floor(Math.random()*data.length+0)])
function FetchMain(){  
  
  useEffect(()=>{
    fetch("http://localhost:3000/Art/?results=2")
    .then(r=>r.json())
    .then(data=> setPics(data))
  },[])
  
  if(!pics) return <h3>Loading...</h3>
  
  return (
    <React.Fragment>     
      <h3>Art Pieces</h3>   
      <Post pics = {pics}/>
    </React.Fragment>
  )
}

  return (
    <React.Fragment> 
      <Nav/>
        <Switch>          
          <Route path = "/about">
            <Home/>
            <Statement/>
          </Route>
          <Route path = "/post">
            <FetchMain/>
            <UserInfo setPics = {setPics}/> 
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
