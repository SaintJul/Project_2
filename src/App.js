import React,{useState,useEffect} from 'react'
import './App.css'
import Nav from './Components/Nav'
import Statement from './Components/Statement'
import UserInfo from './Components/UserInfo'
import {Switch, Route} from "react-router-dom"
import HomePage from './Components/HomePage'
import {motion} from 'framer-motion'
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
    <motion.div  
    whileHover = {{scale: 0.7}}   
    className = "cardPosts" 
    key = {index}>
      <h3 className = "postsHeader">{pic.name}</h3>
      <img className = "cardPosts"
      width = "150" 
      height = "150" 
      alt = "api images"
      src= {pic.piece}/>
    </motion.div>
  ))

  return(
    <motion.div>
      {picCards}
    </motion.div>
  )
}

function RecentPost({pics}){

  return(
    <motion.div
    >
      <h3 className = "postsHeader">Post an art piece you'd like to add</h3>
      <h3 className = "postsHeader">{pics[pics.length - 1].name}</h3>
      <img src = {pics[pics.length-1].piece}
      className = "FinalPost"
      width = "340"
      height = "340"
      alt = "recent post"
      />
    </motion.div>
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
      <motion.h3>Art Pieces</motion.h3>   
      <Post pics = {pics}/>
      <RecentPost pics = {pics}/>
    </React.Fragment>
  )
}

  return (
    <React.Fragment> 
      <Nav/>
        <Switch>          
          <Route path = "/about">
            <HomePage/>
            <Statement/>
          </Route>
          <Route path = "/post">
            <FetchMain/>
            <UserInfo setPics = {setPics}/> 
          </Route>  
          <Route exact path = "/">
            <HomePage/>
            <Links/>
          </Route>
        </Switch>     
    </React.Fragment>
  );
}

export default App;