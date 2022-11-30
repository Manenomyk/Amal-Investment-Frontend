import React, {useState} from 'react';
import './Etity.css';
import * as ent from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import {Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import { IoMdContact } from "react-icons/io";

function Entity() {

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

        <ent.Container>
        <div className='mt-1 '>
          <h3 className='edit'><i><u>Edit Profile</u></i></h3>
          <div className='btnclass'>
            <Link to={"/profile"}><button className='personal'><i><b>Personal</b></i></button></Link>
            <Link to={"/entity"}><button className='entity'><i><b>Entity</b></i></button></Link>
          </div>
        </div>

        <ent.Container >
            <ent.Row className='mt-4'>
                <ent.Col id='raisecont' lg={9} className=" mx-auto mt-4 pt-4">

                <div>
                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Director's name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    <div>
                      Email
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    
                  </div>

                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Entity name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    <div>
                      Entity address
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    
                  </div>
                  </div>
                    


                       
                <div className='mt-4 mb-4'>
                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                    Entity phone number
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    <div>
                    Entity sector
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    
                  </div>

                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                    Entity KRA pin
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    <div>
                    Entity registration number
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    
                  </div>
                  </div>
                  
                  <div id='deta' className='d-flex justify-content-center mt-3'>
                       
                        <button className='probtn' type='submit'><i>Add Entity</i></button>
                    </div>
                  
                    {/* <RaiseFormi /> */}
                </ent.Col>
            </ent.Row>
          </ent.Container>

          
        <ent.Container className='mt-4'>
          <div >
            <i><p className='myenti'>My entities</p></i>
          </div>
          <ent.Row>
            <ent.Col lg={10}>
               <table  className="table" style= { {marginLeft:"8%"}}>
     
        <thead>
          <tr style= { { color: "gray", fontSize:"16px",  backgroundColor:"#EFFAFF", boxShadow:" 0px 3px 5px rgba(139, 137, 137, 0.5)" }} >
            <th scope="col">Entity name</th>
            <th scope="col">Sector</th>
            <th scope="col">Address</th>
            <th scope="col">Phone number</th>
            <th scope="col">KRA pin</th>
            <th scope="col">Company reg number</th>
           
          </tr>
        </thead>


  <tbody>
    <tr style= { { fontSize: "15px",height:"25px",color:"gray"}} >
      <th >Jenga builders</th>
      <td >Construction</td>
      <td>7135-00100</td>
      <td>07357549845</td>
      <td>A65249845</td>
      <td style={{paddingLeft:"20px"}}>7615765</td>
     
    </tr>
    <tr style= { { fontSize: "15px",height:"25px", color:"gray"}}>
      <th >Safi housing</th>
      <td>Real Estate</td>
      <td>6780-00300</td>
      <td>0715789098</td>
      <td>A46584697</td>
      <td style={{paddingLeft:"20px"}}>4157847</td>
    
    </tr>
    <tr style= { { fontSize: "15px",height:"25px", color:"gray"}}>
      <th scope="row">Pesa Holdings</th>
      <td>Investment</td>
      <td>827-00100</td>
      <td>0753632772</td>
      <td >A91235961</td>
      <td style={{paddingLeft:"20px"}}>6089681</td>
     
    </tr>
  </tbody>

       
      </table>

            </ent.Col>
          </ent.Row>
        </ent.Container>

        </ent.Container>
        

      </div>
  )
}

export default Entity