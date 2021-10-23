import React from 'react'


function Header(){
    return(
      <React.Fragment>
        <div id = "home">
          <a href  ="/home">Home</a>
          <a href = "/about">About</a>
          <a href = "/post">Post</a>
        </div>
        <h1>Picasso</h1>
      </React.Fragment>
    )
  }
  export default Header