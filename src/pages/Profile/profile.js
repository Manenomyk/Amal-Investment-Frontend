import React from 'react';
import * as pro from 'react-bootstrap';
import './profile.css';
import { IoMdContact } from "react-icons/io";
import {ProFormi} from './ProFormi';
import Sidebar from '../Sidebar/Sidebar';
import {Link} from 'react-router-dom';

function profile() {
  return (
    <div id='wholeprof' className='d-flex'>
      <div>
        <Sidebar />
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

export default profile