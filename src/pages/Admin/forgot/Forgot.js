import React from 'react';
import axios from 'axios';
import { useState } from "react";







function Forgot() {



    const [ resetInput, resetLogin] = useState ({
        email: '',
        newPass: '',
        newConPass: '',
        errorlist: [],
    });
    
    const handleNewInput = (e) => {
    e.persist();
    resetLogin({...resetInput, [e.target.name]: e.target.value});
    }
    
    
    const takeNewInput = (e) => {
    e.preventDefault();
    
    const data = {
    email: resetInput.email,
    newPass: resetInput.newPass,
    newConPass: resetInput.newConPass,
    }
    
    axios.post(`api/password/email`, data).then(res =>{
        console.log()
    
    
    if(res.status === 200)
    {
    
    localStorage.setItem("auth_token", res.data.token);
    localStorage.setItem("auth_userName", JSON.stringify(res.data.user));
    
    
    
    }else
    {
    resetLogin({...resetInput, errorlist: res.data.error });
    }
    });
    
    }
    



  return (
    <div  style={{marginLeft:"35%",marginTop:"10%", background:"white", width:"40%", paddingLeft:"10%", paddingTop:"20px", borderRadius:"3px", boxShadow:"0px 3px 5px rgba(0, 0, 0, 0.5)"}}>

  
<div className='det' style={{marginLeft:"30PX", fontSize: "10px" }}>
            <p id=' email' style={{ }}>Email address</p>
            <input type="email" name='email' onChange={handleNewInput} value={resetInput.email} id='res' style={{borderRadius: '4px', marginBottom:"10px", width:"150px"}} />
            <p id=' email'>New password</p>
            <input type="password" name='newPass' onChange={handleNewInput} value={resetInput.newPass} id='res' style={{borderRadius: '4px', marginBottom:"10px", width:"150px"}} />
            <p id=' email'>Confirm password</p>
            <input type="password" name='newConPass' onChange={handleNewInput} value={resetInput.newConPass} id='res' style={{borderRadius: '4px', marginBottom:"50px", width:"150px"}}/>
            <div  className="input2">
                    
   
            <button onClick ={takeNewInput}
                            className="btnpop" id="btn3" style={{marginLeft:'50px', fontSize:"12px", marginBottom:"20px"}}>
                             <i>Reset</i></button>
      </div>  
      </div>  
    </div>
  )



  }
export default Forgot;