import React,{useEffect} from 'react'

function UserPosts(){   
    // const [art, setArt] = useState({
    //     name:"",
    //     link:""
    // })   
    // <React.Fragment>                        
    //     <h3>Posted by: {info.id}</h3>
    //     <img alt = "Art Piece Posted by User"src = {info.piece}/>
    // </React.Fragment>   

    
    function FetchUser(){
        useEffect(()=>{
            fetch("http://localhost:4000/Art")
            .then(r=>r.json())
            .then(data=> console.log(data))
           
          }, [])   
          return (
              <div></div>
          )
    }
    
    return (
        <React.Fragment>
            <FetchUser/>           
        </React.Fragment>
    )
}
export default UserPosts