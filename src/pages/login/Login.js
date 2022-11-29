import React, {useState} from 'react';
import './Login.css';
import * as reg from 'react-bootstrap';
import {LogFormi} from './LogFormi';
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";
import logo from '../../images/logo 1.png';
import invest1 from '../../images/invest 6.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { Button } from 'react-bootstrap';

function Login() {

  const navigate = useNavigate();
  const [serverError, setServerError] = useState("")
  const [loading, setLoading] = useState(false);
  const [isSub, setsub] = useState(false);
  const [successResponse,setSuccessResponse]=useState("");
  const validate = Yup.object({

    email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
    
    password: Yup.string()
    .min(6, 'Must be atleast 6 characters')
    .required('password is required'),
    
});

const onSubmit =async (values) =>{
 console.log(values)
  setLoading(true);  axios.post(`api/login`, values) .then(res =>{
    console.log(res)
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
  
        navigate('/dashboard');
  
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
  

  const formik= useFormik({
    initialValues: {
               
      email:'',
      password:''
  },
  validateOnBlur: true,
  onSubmit, 
  validationSchema: validate,
  });



  return (
    <div className='regpage'>
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

        <reg.Container className='mt-5'>
          <reg.Row>
            <reg.Col id='col' lg={5} className='mx-auto'>
              <div className='text-center mt-3'>
                <h2><b><i>SIGN UP</i></b></h2>
                <h4><b><i>Create an account</i></b></h4>
                <p>Sign up using social media</p>
              </div>
              <div id='regsocial' className='d-flex justify-content-center'>
                <div id='fb'>
                  <GrFacebookOption id='fbicon' />
                  Facebook
                </div>
                <div id='google'>
                  <FcGoogle id='googleicon' />
                  Google
                </div>
                <div id='linkedin'>
                  <BsLinkedin id='linkedicon' />
                  Linkedin
                </div>
              </div>

              <hr />

              <reg.Container>
                <div className='d-flex justify-content-center'>
                  {/* <LogFormi /> */}
                  <form onSubmit={formik.handleSubmit}>
                  <input 
                       className={`form-control shadow-none mt-4`}
                      autoComplete='off'
                      name="email"
                      placeholder='Email'
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id='regInput'
                      />

                      <p style={{color:"red"}}>
                      {formik.touched.email && formik.errors.email? formik.errors.email: ""}
                      </p>
                     
                     
                      <input 
                       className={`form-control shadow-none mt-4`}
                      autoComplete='off'
                      name="password"
                      type='password'
                      placeholder='Password'
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id='regInput'
                      />
                       <p style={{color:"red"}}>
                      {formik.touched.password && formik.errors.password? formik.errors.password: ""}
                      </p>

                     <div>
                        {loading&&(
                            <button style={{fontSize:"18px",background:"transparent",color:"black",border:"none",marginLeft:"28px"}}><div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                            <div style={{display:"flex", flexDirection:"row"}}>
                            <Oval  height="20"
                            width="20"
                            color='blue'
                            ariaLabel='loading'/>
                        <span style={{fontSize:"20px"}}>Logging in...</span>
                    </div>
                </div>
            </button>
                        )}

                        {!loading &&(
                        <Button  id='regbtn' className="text-center" type='submit'>Login</Button>
                        )}
                    </div>
                      
                  </form>
                  
                </div>
                <a style={{textDecoration:"none"}} href="/register">
                <p id='already' className='mb-4'><i>Don't have an account? <IoIosArrowDropright id='arrow' /></i></p>
                </a>
                
              </reg.Container>

            </reg.Col>

            <reg.Col lg={6} >
              <reg.Container className='mt-5 mb-5'>
                  <reg.Image
                    className="d-block  w-100"
                    src={logo}
                    // style={{height:"70vh"}}
                    alt="Second slide"
                    fluid
                    />
              </reg.Container>
              <reg.Container>
                  <reg.Image
                    className="d-block  w-100"
                    src={invest1}
                    // style={{height:"70vh"}}
                    alt="Second slide"
                    fluid
                    />
              </reg.Container>
            </reg.Col>
          </reg.Row>
        </reg.Container> 
    </div>
  )
}

export default Login