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

function Statement(){
    return(
      <motion.div
        variants ={divVariants}
        initial = "hidden"
        animate = "visible"
        className = "container"
       id = "about"
       >
        <p id= "purpose"> IMPORTANT MESSAGES</p>
      </motion.div>
    )
  }
  export default Statement