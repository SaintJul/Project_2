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
// Paragraph explaining the purpose of the project
function Statement(){
    return(
      <motion.div
        variants ={divVariants}
        initial = "hidden"
        animate = "visible"
        className = "container"
       id = "about"
       >
        <h5 id= "purpose"> Thanks to the growing interest of digital currencies
          - collectors and enthusiasts alike have gravitated toward 
          NFTS. Naturally, with the influx of cash, artists of every discipline have 
          been encouraged to showcase their art. Click the post button to see afew
          of my favorites.
        </h5>
      </motion.div>
    )
  }
  export default Statement