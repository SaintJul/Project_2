import React from 'react'
import {motion} from 'framer-motion'

const divVariants = {
    hidden : {
        x: "-100vw"
      },
      visible:{
        x: 0 
      }
}

function Links(){
    return(
      <motion.div
      variants = {divVariants}
         initial = "hidden"
         animate = "visible"  
      >
        <a style = {{color : "tomato", fontSize : "18px", fontWeight:"bold"}} href = "https://github.com/SaintJul/Project_2">Github</a><br/>
        <a style = {{color : "tomato", fontSize : "18px",  fontWeight:"bold"}} href = "https://favor-julius.medium.com/4d393ecad9b8">Medium</a>
      </motion.div>
    )
}
export default Links