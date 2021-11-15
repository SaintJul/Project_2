import React from 'react'
import {motion} from 'framer-motion'

const divVariants = {  
  hidden : {
    x: "-100vw"
  },
  visible:{
    x: 0 
  }

  // hover:{
  //     scale:1.1,
  //     transition:{
  //         yoyo:Infinity
  //     }
  // }
}
//Posts styles and presents the Randomized Art-piece
function Post({picInfo}){    
    return(
      <motion.div 
      variants = {divVariants}
      initial = "hidden"
      animate = "visible"
      className = "container"
      id = "postDiv"
      >
        <div id = "card">
          <h2 style ={{color:"rgb(168, 72, 50)"}}>{picInfo.name}</h2>
          <motion.img
          whileHover = {{scale :.7}}
          
          id = "post" 
          width = "350" 
          height = "350" 
          src = {picInfo.piece} 
          alt = "Digital Art"
          />
        </div>
      </motion.div>
    )
  
  }
export default Post  