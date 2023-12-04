import React, { useState } from 'react'
import { adduser } from '../Userslice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userlogin } from '../Userslice';
import { json, useNavigate } from 'react-router-dom';
const vad=true


const Sign = () => {
  const Navigate=useNavigate();
  const Dispatch=useDispatch();
  const[signupdata,setsignupdata]=useState(
    {
      username:"",
      email:"",
      password:""
    })
    const[signindata,setsignindata]=useState(
      {
        username1:"",
        
        password1:""
      })
    const[data,setdata]=useState([]);
    const getdata=(e)=>{
      
     const {value,name}=e.target
     setsignupdata(()=>{
      return{...signupdata, [name]:value}
     })
     
     
     
    }
    const adddata=(e)=>{
      e.preventDefault();
      
      const{username,email,password}=signupdata
      const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      let emailvalidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(username=="") alert("username is mandatory")
       else if(email=="") alert("email is mandatory")
     else if(password=="") alert("password is mandatory")
     
   else if(!(password.match(strongRegex)))
    alert("The password must contain: at least 1 lowercase alphabetical character, at least 1 uppercase alphabetical character, at least 1 numeric character,at least one special character,must be eight characters or longer")
    
   
    else if(!(email.match(emailvalidator)))
    alert("enter a valid email");
  else {
    localStorage.setItem("useryoutube",JSON.stringify([...data,signupdata]))
    alert("you are registered successfully Now you can log in")
  }
  }
  const buttonlogin=(e)=>{
    e.preventDefault();
    const d=JSON.parse(localStorage.getItem('useryoutube'))[0];
    const{username,email,password}=d
    const{username1,password1}=signindata
    if((username1===username||username1===email)&&password1===password){
    
    alert("login successfull")
    Dispatch(userlogin(vad))
    Navigate("/")}
  else{
  alert(" please enter valid credentials")

  
}

    
    
   
   
    


  }
  const logindata=(e)=>{
     
    const {value,name}=e.target
    setsignindata(()=>{
     return{...signindata, [name]:value}
    })
    

  }

  
  return (
    <>
    <h1 className='h1'>If not registered Sign up here</h1>
    <form ><div className='formsign'>
    
    Email id:<input type='email' name='email'  onChange={getdata} required></input>
        Username:<input type='text' name='username'  onChange={getdata} required></input>
        password:<input type='password' name='password'  onChange={getdata} required></input>
        
        </div>
        <button className='signup' type='submit' onClick={adddata} >Sign up</button>
        
    </form>
    <h1 className='h1'>If already registered Log in here</h1>
    <form ><div className='formsign'>
    
    
        Username or Email id:<input type='text'onChange={logindata} name='username1' ></input>
        password:<input type='password' name='password1' onChange={logindata}></input>
        
        </div>
        <button className='signup' onClick={buttonlogin} type='submit'>Log in</button>
        
    </form>
      
    </>
  )
}

export default Sign
