import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import "./signup.css"

export function SignUp() {
 /* const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler =(e)=>{
    e.preventDefault();
    localStorage.setItem("user",username);
    localStorage.setItem("pwd",password);
    console.log('user registred',name, email, username, password);
    navigate("/login");
  }*/
  /*const navigate = useNavigate();
  const [input, setInput] = useState({
    name:"",
    email:"",
    username:"",
    password:"",
  });
  //to localstorage
  const submitHandler = (e)=>{
   e.preventDefault();
   localStorage.setItem("user",JSON.stringify(input));
   navigate("/login");

  }*/
  const navigate = useNavigate();
  const [input, setInput] = useState(
    {
      name:"",
      email:"",
      username:"",
      password:"",
    }
  );
  const submitHandler = (e)=>{
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/");

  }
 



  return (
  <div className='container'>
   <form onSubmit={submitHandler}>
    <div  style={{background:"#fff",position:"",marginLeft:"27%",marginTop:"140px",height:"450px", width:"400px",border:"1px solid #AAB7B8",borderRadius:"5px"}}>
    <h2 style={{textAlign:"center", fontSize:"20px",color:"black",marginTop:"20px",fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Sign Up Page</h2>
    <div style={{marginLeft:"50px" ,marginTop:"20px"}}>
      <label htmlFor='name'>Name:</label>
      <input
      style={{width:"300px",borderRadius:"5px",height:"35px",borderColor:'lightgray'}}
      name='name'
      type='text'
      id='name'
      value={input.name}
    
      onChange={(e) => setInput({...input,[e.target.name] : e.target.value,
      })}/>
    </div>

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
      <label htmlFor='username'>Username:</label>
      <input
      style={{width:"300px",borderRadius:"5px",height:"35px",borderColor:'lightgray'
    }}
       type='username'
       id='username'
       name='username'
       value={input.username}
     
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
    <button type='submit'  style={{width:"300px",backgroundColor:"#0784ea",borderRadius:"5px",height:"35px",borderColor:'lightgray',
  marginTop:"20px",marginLeft:"50px",color:"#fff"}}>Submit</button>

  <p style={{fontSize:"13px", textAlign:"center",marginTop:"10px",color:"grey"}}>Have already an account <Link to="/login">Login here</Link></p>
    </div>
   </form>
   </div>
  
  )
}
