import React, {useState} from 'react';
import * as pro from 'react-bootstrap';
import './profile.css';
import { IoMdContact } from "react-icons/io";
import {ProFormi} from './ProFormi';
import Sidebar from '../Sidebar/Sidebar';
import {Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import axios from 'react';
import { useNavigate } from "react-router-dom";


const user = JSON.parse(localStorage.getItem('auth_userName'));

function Profile() {

  const [isOpen ,setIsOpen] = useState(false);

 
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("")
  const [loading, setLoading] = useState(false);
  const [successResponse,setSuccessResponse]=useState("");
  // const [errors, seterrors] = useState({});
  const [isSub, setsub] = useState(false);
  const [reg, setregInput] = useState({
    name:'',
    email:'',
    phone_number:'',
    id_number:'',
    location:'',
      
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
      id_number: reg.id_number,
      location: reg.location,
  
  }
  
  setLoading(true);
  try {
      axios.post(`/api/register`, details ).then(res =>{
         console.log(res)

        setLoading(false);
          if(res.status === 200) {

            setSuccessResponse(" Profile updated successfully.");
            setTimeout(() => {
              setSuccessResponse("")
            }, 2000);
    
              // alert("registered successfully")
              // navigate('/clerklogin');
  
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
    
      // navigate('/clerkregister');
  }
      
  
      }



  return (
    <div id='wholeprof' className='d-flex'>
      <div>
        <div>
                    {!isOpen ?
                  (
                    <div style={{marginTop:"1rem",fontSize:'25px', cursor:"pointer",marginLeft:"1rem"}}>
                      <FaBars onClick={() => setIsOpen(!isOpen)} />
                      </div>
                  ):
                  (
                    
                  <div>
                  <IoIosArrowDropleft onClick={() => setIsOpen(!isOpen)} style={{fontSize:"2rem", color:"#007CBA",position:"fixed", top:"2%", marginLeft:"187px", cursor:"pointer" }} /> 
                  <Sidebar/>

                  </div>

                  )  
                  }
              </div>
      </div>
      <pro.Container>
        <div className='mt-1 '>
          <h3 className='edit'><i><u>Edit Profile</u></i></h3>
          <div className='btnclass'>
            <Link to={"/profile"}><button className='personal'><i><b>Personal</b></i></button></Link>
            <Link to={"/entity"}><button className='entity'><i><b>Entity</b></i></button></Link>
          </div>
        </div>

        <pro.Container className=''>
          <pro.Row>
            <pro.Col id='procontent' lg={7} className='mx-auto'>
                <div className='text-center'>
                    <IoMdContact className='contaicon' /> 
                </div>
                <div className='d-flex justify-content-center'>
                  
                    {/* <ProFormi /> */}
                    <div>
                    <p>Name</p>
                    <input 
                      className={`form-control shadow-none`}
                      name="name"
                      
                      autoComplete='off'
                      id='regInput'
                      onChange={handleIput} value={reg.name}
                      />


                  <p>Email address</p>
                    <input 
                      className={`form-control shadow-none`}
                      name="email"
                      
                      autoComplete='off'
                      id='regInput'
                      onChange={handleIput} value={reg.email}
                      />

                    <p>Phone number</p>
                    <input 
                      className={`form-control shadow-none`}
                      name="phone_number"
                      
                      autoComplete='off'
                      id='regInput'
                      onChange={handleIput} value={reg.phone_number}
                      />


                      <p>Id number</p>
                    <input 
                      className={`form-control shadow-none`}
                      name="id_number"
                      
                      autoComplete='off'
                      id='regInput'
                      onChange={handleIput} value={reg.id_number}
                      />

                    
                  

                   <p>Location</p>
                    <input 
                      className={`form-control shadow-none`}
                      name="location"
                      
                      autoComplete='off'
                      id='regInput'
                      onChange={handleIput} value={reg.location}
                      />

                      {/* <p>Citizenship</p>
                      <select name='citizenship' id='citizen' onChange = {(e) => setCitizenship(e.target.value)} className='form-control shadow-none'>
                        <option value="selected">Citizenship</option>
                        <option value="">Kenya</option>
                        <option value="">Uganda</option>
                        <option value="">Tanzania</option>
                        <option value="">Rwanda</option>
                        </select> */}
                  </div>
                  
                </div>
                {/* <div className='d-flex mt-3 mb-3 justify-content-center' style={{gap:"1rem"}}>
                          <input 
                            className={`form-control shadow-none'}`}
                            style={{width:"15rem"}}
                            name="kraPin"
                            value={kraPin}
                            autoComplete='off'
                            id='regInpu'
                            type="file"
                            onChange = {(e) => setKra(e.target.files[0])}
                           
                            />

                            <input 
                              className={`form-control shadow-none'}`}
                              style={{width:"15rem"}}
                              name="copyOfID"
                              value={copyOfID}
                              type="file"
                              autoComplete='off'
                              id='regInpu'
                              onChange = {(e) => setIdCopy(e.target.files[0])}
                              />
                        </div> */}

                    <p className='forgotpass'><b><i>Change password? <IoIosArrowDropright id='arrow' /></i></b></p>
                    <div className='d-flex justify-content-center'>
                    <button onClick={regSubmit} className='probtn'><i>Update</i></button>
                    </div>
                <div>

                </div>
            </pro.Col>  
          </pro.Row>  
        </pro.Container> 
      </pro.Container>
    </div>
  )
}

export default Profile