import React, { useState } from 'react';
import './Signinpg.css';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase/firebase';

const Signinpg = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [logintype,setLogintype]=useState(false);

const signUp=(e)=>{
  e.preventDefault();
  createUserWithEmailAndPassword(auth,email,password).then((authuser)=>{
    console.log(authuser)
  }).catch((error)=>{
    console.log(error);
  })


}
const signIn=(e)=>{
  e.preventDefault();
  signInWithEmailAndPassword(auth,email,password).then((authuser)=>{
    console.log(authuser)
  }).catch((error)=>{
    console.log(error);
  })


}


  return (
    <div className='signupScreen'>
        <form>
        <h1>Sign In</h1>
        <input value={email} placeholder="Email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
        <input value={password} placeholder="Password" type="password"  onChange={(e)=>setPassword(e.target.value)} />
        {logintype ? (<button type="submit" onClick={signUp}>
          Sign Up
        </button>):(<button type="submit" onClick={signIn}>
          Sign In
        </button>)}
      
{logintype?( <h4 >
          <span className="signupScreen__gray">Already to Netflix? </span>{" "}
          <span className="signupScreen__link" onClick={()=>setLogintype(false)}>
            SignIn now
          </span>
        </h4>):( 
  <h4 >
          <span className="signupScreen__gray">New to Netflix? </span>{" "}
          <span className="signupScreen__link" onClick={()=>setLogintype(true)}>
            SignUp now
          </span>
        </h4>)}
       
      </form>



        </div>
   
  )
}

export default Signinpg