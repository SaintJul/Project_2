import React,{useState, useEffect} from 'react'

function FetchPost({art,user}){
    const artObj = {
        Art: {
            id: {user},
            piece: {art}
        }
    }

    useEffect(()=>{
        fetch("http://localhost:4000/Art",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(artObj)
        })
        .then(r=>r.json())
        .then(data=> console.log(data))
    })
   

    return (
        <h1>please work</h1>
    )

}

function UserInfo(){

    const [form, setForm] = useState({
        user:"",
        link:""
    })

    function handleSubmit(event){
         event.preventDefault(); 
         //console.log(form);        
        //console.log(`${art} , ${user} is working`)
        
       
    }

    

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        //console.log(event.target.name)
        setForm({...form,
        [name]:value
        })
    }

    
    //<FetchPost art = {form.link} user ={form.user}/>
   
   return(
     <React.Fragment>
     <h1>Post an Art piece you'd like to add</h1>
     <form onSubmit = {handleSubmit, <FetchPost art = {form.link} user ={form.user}/>}>      
       <label >Username:</label>
       <input type  ="text" name = "user" id = "name" value ={form.user} onChange = {handleChange}/>     
       
       <label >    Link:</label>
       <input type = "text" name = "link" id ="link" value = {form.link} onChange = {handleChange}/>
 
       <input value = "Submit" type ="submit"/>    
     </form>
     
    </React.Fragment>
    
   )
 }
 export default UserInfo