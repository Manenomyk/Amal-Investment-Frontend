import React from 'react';
import { Formik, Form } from 'formik';
import{RegTextfield} from './RegTextfield';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';


export const Formi = () => {


    const navigate = useNavigate();
    const [serverError, setServerError] = useState("")
    const [loading, setLoading] = useState(false);
    const [successResponse,setSuccessResponse]=useState("");
    // const [errors, seterrors] = useState({});
    const [isSub, setsub] = useState(false);
    const [reg, setregInput] = useState({
        name:'',
        email:'',
        password:'',
        phone_number: '',
        password_confirmation:'',
        
    }); 
    
    const handleIput = (e) => {
        e.persist();
        setregInput({...reg, [e.target.name]: e.target.value})
    }
    
    const regSubmit = (e) => {
    e.preventDefault();
    
    // seterrors(validate(reg));
    setsub(true);
    
    const details = {
        name: reg.name,
        email: reg.email,
        phone_number: reg.phone_number,
        password: reg.password,
        password_confirmation: reg.password_confirmation,
    
    }
    
    setLoading(true);
    try {
        axios.post(`/api/register`, details ).then(res =>{
           console.log(res)

          setLoading(false);
            if(res.status === 201) {

              setSuccessResponse("you have been registered successfully.");
              setTimeout(() => {
                setSuccessResponse("")
              }, 2000);
      
                // alert("registered successfully")
                navigate('/clerklogin');
    
            } else {
    
            }
    
        }) .catch(res =>{
         
          
        setLoading(false);
        setServerError("Invalid credentials plz check them out")
        setTimeout(()=>{
          setServerError("")
        },2000)
        
        });
        


    } catch (error) {
        
        // alert("oops, invalid credentials")

        setLoading(false);
        setServerError("Invalid credentials.")
        setTimeout(()=>{
          setServerError("")
        },2000)
      
        navigate('/clerkregister');
    }
        
    
        }







    const validate = Yup.object({
        name: Yup.string()
        .required('Name is required'),
        email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
        phone_number: Yup.string()
        .max(10, 'Must not exceed 10 characters')
        .required('Phone number is required'),
        password: Yup.string()
        .min(6, 'Must be atleast 6 characters')
        .required('password is required'),
        password_confirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Field is required'),
    })





  return (
    <div>

<div style={{marginLeft:"45%",marginTop:"0%",position:"fixed", zIndex:"2"}}>
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







        <Formik
            initialValues ={{
                name:'',
                email:'',
                phone_number:'',
                password:'',
                password_confirmation:''
            }}
            validationSchema={validate}
        >

            {formik =>
            
            ( 
            <div>
               
                {console.log(formik.values)}
                <Form>
                    <RegTextfield onChange={handleIput} value={reg.name} placeholder='Username' label="" name="name" type="text" />
                    <RegTextfield onChange={handleIput} value={reg.email} placeholder='Email Address' label="" name="email" type="email" />
                    <RegTextfield onChange={handleIput} value={reg.phone_number} placeholder='Phone number' label="" name="phone_number" type="text" />
                    <RegTextfield onChange={handleIput} value={reg.password} placeholder='Password' label="" name="password" type="password" />
                    <RegTextfield onChange={handleIput} value={reg.password_confirmation} placeholder='Confirm password' label="" name="password_confirmation" type="password" />
                    

                    <div>
                        {loading&&(
                            <button onClick={regSubmit} style={{fontSize:"18px",background:"transparent",color:"black",border:"none",marginLeft:"28px"}}><div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                            <div style={{display:"flex", flexDirection:"row"}}>
                            <Oval  height="20"
                            width="20"
                            color='blue'
                            ariaLabel='loading'/>
                        <span style={{fontSize:"20px"}}>Signing in...</span>
                    </div>
                </div>
            </button>
                        )}

                        {!loading &&(
                        <Button onClick={regSubmit}  id='regbtn' className="text-center" type='submit'>Sign up</Button>
                        )}
                    </div>

                    {/* <div>
                        <a id='signuplink' href="/clerklogin">Already have an account?</a>
                    </div> */}
                </Form>
            </div> 
            )
            }
        </Formik>
    </div>
  )
}
