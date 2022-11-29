import React, {useState} from 'react';
import { Formik, Form } from 'formik';
import{LogTextfield} from './LogTextfield';
import { Button } from 'react-bootstrap';
import { IoIosArrowDropright } from "react-icons/io";
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import axios from 'axios';

export const LogFormi = () => {

    const navigate = useNavigate();

    const [serverError, setServerError] = useState("")
    const [loading, setLoading] = useState(false);
    const [successResponse,setSuccessResponse]=useState("");
    const [errors, seterrors] = useState({});
    const [isSub, setsub] = useState(false);
    const [ loginInput, setLogin] = useState ({
        email: '',
        password: '',
       
    });
  
    
    const handleInput = (e) =>{
        e.persist();
    
        setLogin({...loginInput, [e.target.name]: e.target.value});
        console.log(loginInput);
    };
        
    const loginSubmit = (e) => {
        e.preventDefault();
    
        // seterrors(validate(loginInput));
        setsub(true);
    
        const data ={
            email: loginInput.email,
            password: loginInput.password,
        }
    
        setLoading(true);
  
  axios.post(`api/login`, data) .then(res =>{
    if(res.status === 200)
    {
      setLoading(false)
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("auth_name", JSON.stringify(res.data));
  
        setSuccessResponse("you have been registered successfully.");
        setTimeout(() => {
          setSuccessResponse("")
        }, 3000);
  
        // alert("logged in successfully");
  
        // navigate('/dashboard');
  
    }
    
   
    else{
        alert("Invalid credentials");
  
    }
    
  
  })
  .catch(res =>{
  
  setLoading(false);
  setServerError("Invalid credentials.")
  setTimeout(()=>{
    setServerError("")
  },2000)
  
  
  // alert("Invalid credentials");
  });
  
  }
  
  


    const validate = Yup.object({

        email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
        
        password: Yup.string()
        .min(6, 'Must be atleast 6 characters')
        .required('password is required'),
        
    })



  return (

    <div>


        <div>
            
                        <div style={{marginLeft:"30%",marginTop:"-5%",position:"fixed", zIndex:"2"}}>
                                {successResponse && (
                                     <div 
                                     style={{color:"white",fontSize:"15px",width:"120%",right:"0", background:"#28a745",
                                     borderRadius: "15px", paddingTop:"15px",paddingBottom:"15px",paddingLeft:"6%",border:"1px solid lightgray",opacity:"0.7",transition:"0.5"}}>
                                     {successResponse}
                                    </div>
                                      
                                 )}
                                   {serverError && (
                                     <div 
                                    style={{color:"white",fontSize:"15px",width:"120%",right:"0", background:"#ED4337",
                                    borderRadius: "15px", paddingTop:"15px",paddingBottom:"15px",paddingLeft:"6%",border:"1px solid lightgray",opacity:"0.7",transition:"0.5"}}>
                                    {serverError}
                                    </div>
                                      
                                 )}
                          </div> 
        </div>
        <Formik
            initialValues ={{
               
                email:'',
                password:'',
            } }
            
            validationSchema={validate}
        >

            {formik =>
            
            ( 
            <div>
               
                {console.log(formik.values)}
                <Form >
                    
                    <LogTextfield onChange={handleInput} value={loginInput.email} placeholder='Email Address' label="" name="email" type="email" />
                    <LogTextfield onChange={handleInput} value={loginInput.password} placeholder='Password' label="" name="password" type="password" />
                    <p className='forgotpass'><b><i>Forgot password? <IoIosArrowDropright id='arrow' /></i></b></p>
                    

                    <div>
                        {loading&&(
                            <button onClick={loginSubmit} style={{fontSize:"18px",background:"transparent",color:"black",border:"none",marginLeft:"28px"}}><div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                            <div style={{display:"flex", flexDirection:"row"}}>
                            <Oval  height="20"
                            width="20"
                            color='blue'
                            ariaLabel='loading'/>
                        <span style={{fontSize:"20px"}}>Loging in...</span>
                    </div>
                </div>
            </button>
                        )}

                        {!loading &&(
                        <Button  id='regbtn' className="text-center" type='submit'>Log in</Button>
                        )}
                    </div>
                </Form>
            </div> 
            )
            }
        </Formik>
    </div>
  )
}
