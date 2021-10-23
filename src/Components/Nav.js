import React from 'react'
import {NavLink} from 'react-router-dom'


function Nav(){

    return(
      <React.Fragment>
        <nav id  = "nav">
          <NavLink exact to = "/">Home</NavLink>
          <NavLink to = "/about">About</NavLink>
          <NavLink to = "/post">Post</NavLink>
        </nav>        
      </React.Fragment>
    )
  }
  export default Nav