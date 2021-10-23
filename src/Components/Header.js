import React from 'react'


function Header({changePage}){

  function handleClick(event){
    event.preventDefault()
    changePage(event.target.pathname)
  }


    return(
      <React.Fragment>
        <nav id = "home">
          <a onClick = {handleClick} href  ="/home">Home</a>
          <a onClick = {handleClick} href = "/about">About</a>
          <a onClick = {handleClick} href = "/post">Post</a>
        </nav>
        <h1>Picasso</h1>
      </React.Fragment>
    )
  }
  export default Header