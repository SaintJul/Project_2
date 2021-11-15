import React,{useEffect,useState} from 'react'
import Post from './Post'

//Fetch for my favorite Artists
function FetchMain(){
  const [pic, setPic] = useState("")
    useEffect(()=>{
      fetch("http://localhost:3000/Art")
      .then(r=>r.json())
      .then(data=> setPic(data[Math.floor(Math.random()*data.length+0)]))
    },[])

    if(!pic) return <h3>Loading...</h3>
    
    return (
      <React.Fragment>        
        <Post picInfo = {pic}/>
      </React.Fragment>
    )
  }
  export default FetchMain