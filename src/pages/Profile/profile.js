import React, {useState} from 'react';
import * as pro from 'react-bootstrap';
import './profile.css';
import { IoMdContact } from "react-icons/io";
import {ProFormi} from './ProFormi';
import Sidebar from '../Sidebar/Sidebar';
import {Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function Profile() {

  const [isOpen ,setIsOpen] = useState(false);


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
                    <ProFormi />
                    
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