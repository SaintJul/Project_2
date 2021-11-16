import React from 'react'
import {motion} from 'framer-motion'

const divVariants = {
    hidden : {
        y: -100
      },
      visible:{
        y: 0 
      }
}

function HomePage(){
    return(
        <motion.div
         variants = {divVariants}
         initial = "hidden"
         animate = "visible"  
         id = "home"
         className = "container"
        >
            <h1 style ={{color:"rgb(168, 72, 50)"}}>The Next Artistic Renaissance?</h1>
            <img id = "gif" alt ="gif" src = "https://media0.giphy.com/media/M52wyuahvQfJK/200.webp?cid=ecf05e47x3v2k6gwe31teklby1vs22bqn9a8vf36zl7j7ymd&rid=200.webp&ct=g"/>
        </motion.div>
    )

}
export default HomePage