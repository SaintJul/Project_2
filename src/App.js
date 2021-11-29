import React,{useState,useEffect} from 'react'
import './App.css'
import Nav from './Components/Nav'
import Statement from './Components/Statement'
import UserInfoPosted from './Components/UserInfoPosted'
import {Switch, Route} from "react-router-dom"
import HomePage from './Components/HomePage'
import {motion} from 'framer-motion'
import Links from './Components/Links'

function App() {
  const [pics, setPics] = useState("")

// Posts all the images
function Post({pics}){
  const picCards = pics.map((pic) =>(
    <motion.div  
    whileHover = {{scale: 0.7}}   
    className = "cardPosts" 
    key = {pic.piece}>
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

// Shows the most recent post
function RecentPost({pics}){

  return(
    <motion.div
    >
      <h3 className = "postsHeader">Post an art piece you'd like to add</h3>
      <h3 className = "postsHeader">{pics[pics.length - 1].name}</h3>      
      <img src = {pics[pics.length-1].piece} {/* posts the last image to show the in state */}
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
            <UserInfoPosted/> 
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