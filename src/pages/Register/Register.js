import React, {useState} from 'react';
import './Register.css';
import * as reg from 'react-bootstrap';
import {Formi} from './Formi';
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";
import logo from '../../images/logo 1.png';
import invest from '../../images/Assets/homepage carousel/invest.jpeg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { Button } from 'react-bootstrap';


function Register() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [successResponse,setSuccessResponse]=useState("");

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

  const onSubmit =async (values) =>{
    // const {password_confirmation, ...data} = values;
console.log(values)
    setLoading(true);
    try {
      axios.post(`/api/register`, values ).then(res =>{
         console.log(res)

        setLoading(false);
          if(res.status === 201) {

            setSuccessResponse("you have been registered successfully.");
            setTimeout(() => {
              setSuccessResponse("")
            }, 2000);
    
              // alert("registered successfully")
              navigate('/login');
  
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
    
      navigate('/register');
  }
      
  
      }



  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      phone_number:'',
      password:'',
      password_confirmation:''
  },
  validateOnBlur: true,
  onSubmit,
  validationSchema: validate,
  });



  return (
    <div className='regpage'>
        
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
                  {/* <Formi /> */}
                    <div>
                      
                  <form onSubmit={formik.handleSubmit}>
                  <input 
                    className={`form-control shadow-none `}
                    autoComplete='off'
                    placeholder='Your name'
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    id='regInput'
                    onBlur={formik.handleBlur}
                    />
                    <p style={{color:"red"}}>{formik.touched.name && formik.errors.name ? formik.errors.name : ""}</p>



                    <input 
                    className={`form-control shadow-none mt-3 `}
                    autoComplete='off'
                    placeholder='Email Address'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    id='regInput'
                    onBlur={formik.handleBlur}
                    />
                    <p style={{color:"red"}}>
                     {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                     </p>

                    
                    <input 
                    className={`form-control shadow-none mt-3`}
                    autoComplete='off'
                    placeholder='Phone number'
                    name='phone_number'
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    id='regInput'
                    onBlur={formik.handleBlur}
                    />
                    <p style={{color:"red"}}>
                     {formik.touched.phone_number && formik.errors.phone_number ? formik.errors.phone_number : ""}
                     </p>


                    <input 
                    className={`form-control shadow-none mt-3`}
                    autoComplete='off'
                    placeholder='Password'
                    type='password'
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    id='regInput'
                    onBlur={formik.handleBlur}
                    />
                    <p style={{color:"red"}}>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>
                     



                    <input 
                    className={`form-control shadow-none mt-3`}
                    autoComplete='off'
                    placeholder='Confirm Password'
                    type='password'
                    name='password_confirmation'
                    value={formik.values.password_confirmation}
                    onChange={formik.handleChange}
                    id='regInput'
                    onBlur={formik.handleBlur}
                    />
                    <p style={{color:"red"}}>{formik.touched.password_confirmation && formik.errors.password_confirmation ? formik.errors.password_confirmation : ""}</p>
                     

                     <div>
                        {loading&&(
                            <button style={{fontSize:"18px",background:"transparent",color:"black",border:"none",marginLeft:"28px"}}><div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
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
                        <Button  id='regbtn' className="text-center" type='submit'>Sign up</Button>
                        )}
                    </div>
                   
                  </form>
                  
                    </div>
                </div>
                <a style={{textDecoration:"none"}} href="/login">
                <p id='already' className='mb-4'><i>Already have an account? <IoIosArrowDropright id='arrow' /></i></p>
                </a>
              </reg.Container>

            </reg.Col>

            <reg.Col lg={6} className='mt-5'>
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
                    src={invest}
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

export default Register