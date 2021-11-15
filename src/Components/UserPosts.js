import React,{useState, useEffect} from 'react'
import {motion} from "framer-motion"

const divVariants = {
    hidden : {
        y: -100
      },
      visible:{
        y: 0 
      }
}

//Posts the most recent user submission
function PostInfo({info}){  
    return(
        <div id = "card">
            <h3 style = {{color : "rgb(168, 72, 50)"}}>{info.name}</h3>
            <motion.img 
                whileHover = {{scale: .7}}

                id = "post"
                width = "340"
                height = "340"            
                src = {info.piece}
                alt ="User pic"
            />
        </div>
    )
}

function UserPosts(){   
    const [userPic, setUserPic] = useState("")
       
    function FetchUser(){        
        useEffect(()=>{
            fetch("http://localhost:4000/Art")
            .then(r=>r.json())
            .then(data=> setUserPic(data[data.length -1]))           
          }, [])      
          
          return (
              <h3>Most Recent Post</h3>
          )
    }
    
    return (
        <React.Fragment>
             
             <motion.h3 style = {{color :"rgba(139, 32, 32, 0.795)"}}
                variants ={divVariants}
                initial = "hidden"
                animate = "visible"
             ></motion.h3>    
             <FetchUser/>    
             <PostInfo info ={userPic}/>
        </React.Fragment>
    )
}
export default UserPosts