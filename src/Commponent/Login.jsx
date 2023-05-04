import React, { useState } from 'react'
//import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from 'react-router-dom';
import  "./login.css";


export function Login() {
 /* const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
   const submitHandler=(e)=>{
    e.preventDefault();
    //hashed data 
    login(username + password);
   }
    */
   /*const navigate = useNavigate();
   const [input, setInput] = useState({
   email:"",
   password:"",
  });
  const submitHandler = (e)=>{
    e.preventDefault();
    const loggeduser = JSON.parse( localStorage.getItem("user"));
    if(input.email === loggeduser.email && input.password === loggeduser.password)
    {
      localStorage.setItem("loggedin", true);
     navigate("/");
    }
    else{
      alert("Wrong Email & Password");
    }
  }*/
  const navigate = useNavigate();
  const [input, setInput] = useState(
    {
      email:"",
      password:"",
    }
  );
  const submitHandler=(e)=>{
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggeduser.email && input.password === loggeduser.password )
    {
      localStorage.setItem("loggein",true);
       navigate("/home");
    }
    else{
    alert("Wraong Email & password");
    }
  };
    
    
    
    
  
  return (
    <form onSubmit={submitHandler}>
    <div id='container' style={{background:"#fff",position:"absolute",marginLeft:"35%",marginTop:"200px",height:"350px", width:"400px",border:"1px solid #AAB7B8",borderRadius:"5px"}}>
    <h2 style={{textAlign:"center", fontSize:"20px",color:"black",marginTop:"20px",fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Login Page</h2>
    <div style={{marginLeft:"50px" ,marginTop:"5px"}}>
      <label htmlFor='email'>Email:</label>
      <input
      style={{width:"300px",borderRadius:"5px",height:"35px",borderColor:'lightgray'
    }}
       type='email'
       id='email'
       name='email'
      value={input.email}
    
      onChange={(e) => setInput({...input,[e.target.name] : e.target.value,
      })}
      />
    </div>
   
    <div style={{marginLeft:"50px" ,marginTop:"5px"}}>
      <label htmlFor='password'>Password:</label>
      <input
      style={{width:"300px",borderRadius:"5px",height:"35px",borderColor:'lightgray'
    }}
       type='password'
      id='password'
      name='password'
      value={input.password}
      onChange={(e) => setInput({...input,[e.target.name] : e.target.value,
       })}
       />
    </div>
    <button  type='submit' style={{width:"300px",backgroundColor:"#0784ea",borderRadius:"5px",height:"35px",borderColor:'lightgray',
  marginTop:"30px",marginLeft:"50px",color:"#fff"}}>Submit</button>
  <p style={{fontSize:"13px", textAlign:"center",marginTop:"10px",color:"grey"}}>Don't Registred an account <Link to='/signup'>Register here</Link></p>
    </div>
   </form>
  
  )
}

