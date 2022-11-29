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
import axios from 'react'


const user = JSON.parse(localStorage.getItem('auth_userName'));

function Profile() {

  const [isOpen ,setIsOpen] = useState(false);

  
  const [ takeInput,  entityInput]= useState({
    firstName: '',
    lastName: '',
    phone_number: '',
    email: '',
    citizenship: '',
    kraPin:'',
    copyOfID:'',
    

});

const [firstName, setFirstName] = useState("");
const [lastName, setLastName ] = useState("")
const [phone_number, setPhone] = useState("")
const [email, setEmail] = useState("")
const [citizenship, setCitizenship] = useState("")
const [copyOfID, setIdCopy] = useState({})
const [kraPin, setKra] = useState({})

const pageSubmit = (e) => {
e.preventDefault();
const formData = new FormData();
if(e.target.files && e.target.files[0]){
formData.append('kraPin', e.target.files[0]);
}
formData.append('firstName', firstName);
formData.append('lastName', lastName);
formData.append('phone_number', phone_number);
formData.append('email', email);
formData.append('citizenship', citizenship);
formData.append('copyOfID', copyOfID)
formData.append('kraPin', kraPin)


// const data = {
//   firstName: takeInput.firstName,
//   lastName: takeInput.lastName,
//   phone: takeInput.phone,
//   email: takeInput.email,
//   citizenship: takeInput.citizenship,
//   kra: takeInput.kra,
//   idCopy: takeInput.idCopy,

// }
axios.post(`/api/user/update-profile/${user.id}`, formData).then (res =>{
console.log(res);
if(res.data.status === 200){

localStorage.setItem('auth_token', res.data.token);
localStorage.setItem('auth_name', res.data.firstName);

}else
{

}

});

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
                    <p>First name</p>
                    <input 
                      className={`form-control shadow-none'}`}
                      name="firstName"
                      value={firstName}
                      autoComplete='off'
                      id='regInput'
                      onChange = {(e) => setFirstName(e.target.value)}
                      />

                      <p>Last Name</p>
                    <input 
                      className={`form-control shadow-none'}`}
                      name="lastName"
                      value={lastName}
                      autoComplete='off'
                      id='regInput'
                      onChange = {(e) => setLastName(e.target.value)}
                      />

                      <p>Phone number</p>
                    <input 
                      className={`form-control shadow-none'}`}
                      name="phone_number"
                      value={phone_number}
                      autoComplete='off'
                      id='regInput'
                      onChange = {(e) => setPhone(e.target.value)}
                      />

                      <p>Email address</p>
                    <input 
                      className={`form-control shadow-none'}`}
                      name="email"
                      value={email}
                      autoComplete='off'
                      id='regInput'
                      onChange = {(e) => setEmail(e.target.value)}
                      />

                      <p>Citizenship</p>
                      <select name='citizenship' id='citizen' onChange = {(e) => setCitizenship(e.target.value)} className='form-control shadow-none'>
                        <option value="selected">Citizenship</option>
                        <option value="">Kenya</option>
                        <option value="">Uganda</option>
                        <option value="">Tanzania</option>
                        <option value="">Rwanda</option>
                        </select>
                  </div>
                  
                </div>
                <div className='d-flex mt-3 mb-3 justify-content-center' style={{gap:"1rem"}}>
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
                        </div>

                    <p className='forgotpass'><b><i>Change password? <IoIosArrowDropright id='arrow' /></i></b></p>
                    <div className='d-flex justify-content-center'>
                    <button onClick ={pageSubmit} className='probtn'><i>Update</i></button>
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