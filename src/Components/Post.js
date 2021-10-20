import React from 'react'

function Post({picInfo}){
    //console.log(picInfo)
    return(
      <div className = "postDiv">
        <h3 style ={{color:"rgb(168, 72, 50)"}}>{picInfo.name}</h3>
        <img width = "350" height = "350" src = {picInfo.piece} alt = "Digital Art"/>
      </div>
    )
  
  }
export default Post  