import React, { useContext, useRef } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { Data } from '../App'
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  

  const {userData, setLogin,setloginuser }=useContext(Data)
  const navigate=useNavigate();
 console.log(userData);
  const user=useRef();
  const pass=useRef()

  


const logins=(e)=>{
  e.preventDefault()
  const username=user.current.value;
  const password=pass.current.value;
 
  const users=userData.find((item)=>item.userName===username && item.password===password);
  if(users){
    setLogin(true)
  toast.success('Thankyou For Login')
     navigate("/")
     setloginuser(users);
  }else{
    toast.error("User not found")

  }
}




  return (
    <div>
 
<div  className='shadow p-3 mb-5 bg-white rounded m-3  ' style={{width:"25rem", height:"55vh", margin:"auto" ,marginTop:"10%"}}>  
<input  className='mt-5'   style={{height:"3rem",width:"20rem"}} placeholder='username'    ref={user} />
<br/>
 
<br/>
<input  type='password'   style={{height:"3rem",width:"20rem"}}  placeholder='password'    ref={pass}/>
<br/>
<h6  className='mt-3 text-primary'>forget password</h6>




<Button   className='mt-3'  variant="success"   onClick={logins}>Login</Button>
<h6 className='mt-3'>Dont have an account?<Link to={"/register"}>Signup</Link></h6>
</div>

    </div>
  )
}

export default Login