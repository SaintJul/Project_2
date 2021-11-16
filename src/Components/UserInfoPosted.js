import React,{useState} from 'react'
import {motion} from 'framer-motion'

//
function UserInfo({Pics, setPics}){

    const [form, setForm] = useState({
        user:"",
        link:""
    })

    function handleSubmit(event){
       event.preventDefault(); 
       const art = form.link
       const user =form.user

       
        const artObj = {          
                name: user,
                piece: art
        }     
        
        fetch("http://localhost:3000/Art",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(artObj)
        })
        .then(r=> r.json())
        .then(data =>console.log(data))
        
    }  

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value       
        setForm({...form,
        [name]:value
        })
        
    }
   
   
   return(
     <div style ={{margin : "5px", margin : "5px", padding: "5px"}}>
        <form onSubmit = {handleSubmit}>      
            <label style = {{fontWeight: "bold"}} className = "posts">Username:</label>
            <input 
             type  ="text" 
             name = "user" 
             id = "name" 
             value ={form.user}
            onChange = {handleChange}
            />     
       
            <label style = {{fontWeight: "bold"}} className = "posts">    Link:</label>
            <input 
             type = "text" 
             name = "link" 
             id ="link" 
             value = {form.link}
              onChange = {handleChange}
            />
 
            <motion.input
             whileHover = {{scale :1.1}}
             value = "Submit" 
             type ="submit"
             />    
        </form>
     
    </div>
    
   )
 }
 export default UserInfo