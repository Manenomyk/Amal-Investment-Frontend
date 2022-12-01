import React, {useState} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./raise.css";
import * as raise from 'react-bootstrap';
import {RaiseFormi} from './RaiseFormi';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import tooltip from '../../images/Assets/icons/tooltip.png';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



const user = JSON.parse(localStorage.getItem('auth_name'));
function Raise() {
    const [isOpen ,setIsOpen] = useState(false);


    
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("")
  const [loading, setLoading] = useState(false);
  const [successResponse,setSuccessResponse]=useState("");
  // const [errors, seterrors] = useState({});
  const [isSub, setsub] = useState(false);
  const [reg, setregInput] = useState({
    first_name:'',
    middle_name:'',
    last_name:'',
    id_number:'',
    phone_number:'',

    email:'',
    entity_name:'',
    director_name:'',
    location:'',
    entity_id_number:'',

    entity_phone_number:'',
    entity_email:'',
    amount:'',
      
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
      first_name: reg.first_name,
      middle_name: reg.middle_name,
      phone_number: reg.phone_number,
      id_number: reg.id_number,
      last_name: reg.last_name,
      email: reg.email,
      entity_name: reg.entity_name,
      director_name: reg.director_name,
      location: reg.location,
      entity_id_number: reg.entity_id_number,
      entity_phone_number: reg.entity_phone_number,
      entity_email: reg.entity_email,
      amount: reg.amount,
  
  }
  
  setLoading(true);
  try {
      axios.post(`/api/user/invest/${user.user.id}`, details ).then(res =>{
         console.log(res)

        setLoading(false);
          if(res.status === 200) {

            setSuccessResponse(" Profile updated successfully.");
            setTimeout(() => {
              setSuccessResponse("")
            }, 2000);
    
              alert("Raised Capital successfully");
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
      <div className='d-flex'>

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


          <raise.Container >
            <raise.Row className='mt-4'>
                <raise.Col id='raisecont' lg={9} className=" mx-auto mt-4 pt-4">

                <div>
                  <p><b><u>Personal details</u></b></p>
                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      First name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      name="first_name"
                      onChange={handleIput} value={reg.first_name}
                      />
                    </div>
                    <div>
                      Middle name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      name="middle_name"
                      onChange={handleIput} value={reg.middle_name}
                      />
                    </div>
                    <div>
                      Last Name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      name="last_name"
                      onChange={handleIput} value={reg.last_name}
                      />
                    </div>
                  </div>

                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Id number
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      name="id_number"
                      onChange={handleIput} value={reg.id_number}
                      />
                    </div>
                    <div>
                      Phone number
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      name="phone_number"
                      onChange={handleIput} value={reg.phone_number}
                      />
                    </div>
                    <div>
                      Email
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      name="email"
                      onChange={handleIput} value={reg.email}
                      />
                    </div>
                  </div>
                  </div>
                    


                       
                <div className='mt-4 mb-4'>
                  <p><b><u>Entity details</u></b></p>
                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Entity name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      name="entity_name"
                      onChange={handleIput} value={reg.entity_name}
                      />
                    </div>
                    <div>
                      Director's name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      name="director_name"
                      onChange={handleIput} value={reg.director_name}
                      />
                    </div>
                    <div>
                      Location
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      name="location"
                      onChange={handleIput} value={reg.location}
                      />
                    </div>
                  </div>

                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Id number
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      name="entity_id_number"
                      onChange={handleIput} value={reg.entity_id_number}
                      />
                    </div>
                    <div>
                      Phone number
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      name="entity_phone_number"
                      onChange={handleIput} value={reg.entity_phone_number}
                      />
                    </div>
                    <div>
                      Email
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      name="entity_email"
                      onChange={handleIput} value={reg.entity_email}
                      />
                    </div>
                  </div>
                  </div>

                  <p><b>Enter amount you want to raise</b></p>
                  
                  <div style={{gap:"2rem"}} className='d-flex justify-content-center'>
                  <input id='regInput1' name="amount" onChange={handleIput} value={reg.amount} className='form-control shadow-none' placeholder='AMOUNT' type="text" />
                        <select id='raiseoption' className='form-control shadow-none'>
                            <option >Euros</option>
                            <option>$USD</option>
                            <option>GBP</option>
                            <option>KSH</option>
                            </select>
                        </div>
                  
                  
                  <div id='deta' className='d-flex justify-content-center mt-3'>
                       <div>
                            <raise.Image
                            className="d-block mx-auto"
                            src={tooltip}
                            style={{fontSize:"15px", cursor:"pointer"}}
                            alt="First slide"
                            fluid
                            />
                        </div>
                        `<button onClick={regSubmit} className='probtn' ><i>Raise capital</i></button>`
                    </div>
                  
                    {/* <RaiseFormi /> */}
                </raise.Col>
            </raise.Row>
          </raise.Container>
      </div>
);
}

export default Raise;