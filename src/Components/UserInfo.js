import React,{useState} from 'react'
import UserPosts from './UserPosts'
import {motion} from 'framer-motion'

function UserInfo(){

    const [form, setForm] = useState({
        user:"",
        link:""
    })

    function handleSubmit(event){
       event.preventDefault(); 
       const art = form.link
       const user =form.user

       
        const artObj = {           
                id: user,
                piece: art
        }
    
       
        fetch("http://localhost:4000/Art",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(artObj)
        })
        .then(r=>r.json())
        .then(data=> console.log(data)) 
        
    }  

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        //console.log(event.target.name)
        setForm({...form,
        [name]:value
        })
        
    }

    //console.log(form)
   
   
   return(
     <React.Fragment>
        <h3 className = "posts">Post an art piece you'd like to add</h3>
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
     <UserPosts user = {form.user} link = {form.link}/>
    </React.Fragment>
    
   )
 }
 export default UserInfo