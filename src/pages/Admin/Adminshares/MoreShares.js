import React, {useState} from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import * as admi from 'react-bootstrap';
import './Adminshares.css';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function MoreShares() {

  const [isOpen ,setIsOpen] = useState(false);

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
                  <AdminSidebar/>

                  </div>

                  )  
                  }
              </div>

      <admi.Container>
      <admi.Row>
        <admi.Col id='admindash' className='mx-auto' lg={7}>
          <div className='text-center mt-4'>
            <h3><i><u>Kazi coffee</u></i></h3>
          </div>

          <div id='cardcon' className='d-flex justify-content-center'>
            <div className='d-flex'>
              <p>Share starting price:</p>
              <p>$200</p>
            </div>
            <div className='d-flex'>
              <p>Share current price:</p>
              <p>$599</p>
            </div>
          </div>

          <div id='cardcon1' className='d-flex justify-content-center'>
            <div className='d-flex'>
              <p>Total value of shares:</p>
              <p>2M</p>
            </div>
            <div className='d-flex'>
              <p>Number of shares:</p>
              <p>123456</p>
            </div>
          </div>

          <div className='d-flex justify-content-center'>
              <p>Expected share growth:</p>
              <p>17%</p>
            </div>
        </admi.Col>
      </admi.Row>

      <admi.Row>
        <admi.Col id='admindash' className='mx-auto' lg={7}>
          <div className='text-center mt-4'>
            <h3><i><u>Kazi coffee</u></i></h3>
          </div>

          <div id='cardcon' className='d-flex justify-content-center'>
            <div className='d-flex'>
              <p>Share starting price:</p>
              <p>$200</p>
            </div>
            <div className='d-flex'>
              <p>Share current price:</p>
              <p>$599</p>
            </div>
          </div>

          <div id='cardcon1' className='d-flex justify-content-center'>
            <div className='d-flex'>
              <p>Total value of shares:</p>
              <p>2M</p>
            </div>
            <div className='d-flex'>
              <p>Number of shares:</p>
              <p>123456</p>
            </div>
          </div>

          <div className='d-flex justify-content-center'>
              <p>Expected share growth:</p>
              <p>17%</p>
            </div>
        </admi.Col>
      </admi.Row>


      <admi.Row>
        <admi.Col className='mx-auto' lg={7}>
          <div id='admiapprov1' className='d-flex justify-content-center'>
          <button className='approvbtn'>Delete</button>
          </div>
        </admi.Col>
      </admi.Row>
    </admi.Container>

    </div>
  )
}

export default MoreShares