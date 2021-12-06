import React from 'react'
import {NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'

// Navigation Bar
function Nav(){
    return(
      <>
        <motion.nav id  = "nav">
          <NavLink exact to = "/">Home</NavLink>
          <NavLink to = "/about">About</NavLink>
          <NavLink to = "/post">Post</NavLink>
        </motion.nav>        
      </>
    )
  }
  export default Nav