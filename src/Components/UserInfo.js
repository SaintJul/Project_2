import React,{useState} from 'react'



function UserInfo(){

    const [form, setForm] = useState({
        user:"",
        link:""
    })

    console.log("FetchPost")

    function handleChange(event){
        event.preventDefault()
        console.log(event.target.value)
    }

    
    
   
   return(
     <React.Fragment>
     <h1>Post an Art piece you'd like to add</h1>
     <form>      
       <label >Username:</label>
       <input type  ="text" name = "user" id = "name" value ={form.user} onChange = {handleChange}/>     
       
       <label >    Link:</label>
       <input name = "link" id ="link" value = {form.link} onChange = {handleChange}/>
 
       <input value = "Submit" type ="submit"/>    
     </form>
    </React.Fragment>
    
   )
 }
 export default UserInfo