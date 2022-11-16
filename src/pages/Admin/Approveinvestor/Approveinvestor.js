import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import * as admi from 'react-bootstrap';
import './Approveinvestor.css';

function Approveinvestor() {
  return (
    <div className='d-flex'>
      <AdminSidebar/>


      <admi.Container>
      <admi.Row>
        <admi.Col id='admindash' className='mx-auto' lg={7}>
          <div className='text-center mt-4'>
            <h3><i><u>Investor Approval</u></i></h3>
          </div>

          <div id='cardcont' className='d-flex justify-content-center'>
            <div >
              <h5><i><u>Name</u></i></h5>
              <p>peter werty</p>
            </div>
            <div>
              <h5><i><u>Email</u></i></h5>
              <p>peter werty</p>
            </div>
          </div>

          <div id='cardcont1' className='d-flex justify-content-center'>
            <div >
              <h5><i><u>Phone number</u></i></h5>
              <p>peter werty</p>
            </div>
            <div>
              <h5><i><u>Entity</u></i></h5>
              <p>peter werty</p>
            </div>
          </div>
        </admi.Col>
      </admi.Row>

      <admi.Row>
        <admi.Col className='mx-auto' lg={7}>
          <div id='admiapprov' className='d-flex justify-content-center'>
          <button className='approvbtn'>Approve</button>
          </div>
        </admi.Col>
      </admi.Row>
    </admi.Container>
    </div>
  )
}

export default Approveinvestor