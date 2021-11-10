import React,{useState} from 'react'
import {motion} from "framer-motion"


const divVariants = {
    hidden : {
        y: -100
      },
      visible:{
        y: 0 
      }
}


function UserPosts(){   
    const [finale, setFinale] = useState("")
       
    function Appreciation(){
        return( 
           setFinale("Thanks so much for Participating")
        )
    }
    // function FetchUser(){        
    //     useEffect(()=>{
    //         fetch("http://localhost:4000/Art")
    //         .then(r=>r.json())
    //         .then(data=> setUserPic(data))
           
    //       }, [])   

                  
    //       return (
    //           <h3>Thanks again</h3>
    //       )
    // }
    
    return (
        <React.Fragment>
             <button onClick = {Appreciation}>Please Click</button> 
             <motion.h3 style = {{color :"rgba(139, 32, 32, 0.795)"}}
             variants ={divVariants}
             initial = "hidden"
             animate = "visible"
             >{finale}</motion.h3>    
        </React.Fragment>
    )
}
export default UserPosts