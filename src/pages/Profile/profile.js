import React from 'react';
import * as pro from 'react-bootstrap';
import './profile.css';
import { IoMdContact } from "react-icons/io";
import {ProFormi} from './ProFormi';

function profile() {
  return (
    <div>
      <pro.Container>
        <div className='mt-5 '>
          <h3 className='edit'><i><u>Edit Profile</u></i></h3>
          <div className='btnclass'>
            <button className='personal'><i><b>Personal</b></i></button>
            <button className='entity'><i><b>Entity</b></i></button>
          </div>
        </div>

        <pro.Container className=''>
          <pro.Row>
            <pro.Col id='procontent' lg={8} className='mx-auto'>
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