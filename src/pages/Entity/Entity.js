import React, {useState} from 'react';
import './Etity.css';
import * as ent from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import {Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function Entity() {

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
                  <Sidebar/>

                  </div>

                  )  
                  }
              </div>
      <div>
        <ent.Container>
        <div className='mt-1 '>
          <h3 className='edit'><i><u>Edit Profile</u></i></h3>
          <div className='btnclas'>
           <Link  to={"/profile"}> <button className='person'><i><b>Personal</b></i></button></Link>
            <Link to={"/entity"}><button className='entit'><i><b>Entity</b></i></button></Link>
          </div>
        </div>

        <ent.Container>
          <ent.Row>
            
            <ent.Col id='entdetails' className='mx-auto' lg={10}>
              <div id='entcont' className='d-flex'>
                <div>
                  <label htmlFor="name">Director's name</label>
                  <input id='entinput' className='form-control shadow-none' type="text" />
                </div>
                <div>
                  <label htmlFor="name">Email</label>
                  <input id='entinput' className='form-control shadow-none' type="email" />
                </div>
                <div>
                  <label htmlFor="name">.</label>
                  <input id='entinput' className='form-control shadow-none' type="file" />
                </div>
              </div>

              <div id='entcont' className='d-flex'>
                <div>
                  <label htmlFor="name">Entity name</label>
                  <input id='entinput' className='form-control shadow-none' type="text" />
                </div>
                <div>
                  <label htmlFor="name">Entity address</label>
                  <input id='entinput' className='form-control shadow-none' type="email" />
                </div>
                <div>
                  <label htmlFor="name">.</label>
                  <input id='entinput' className='form-control shadow-none' type="file" />
                </div>
              </div>

              <div id='entcont' className='d-flex'>
                <div>
                  <label htmlFor="name">Entity phone number</label>
                  <input id='entinput' className='form-control shadow-none' type="text" />
                </div>
                <div>
                  <label htmlFor="name">Entity sector</label>
                  <input id='entinput' className='form-control shadow-none' type="email" />
                </div>
                <div>
                  <label htmlFor="name">.</label>
                  <input id='entinput' className='form-control shadow-none' type="file" />
                </div>
              </div>

              <div id='entcont' className='d-flex'>
                <div>
                  <label htmlFor="name">Entity KRA pin</label>
                  <input id='entinput' className='form-control shadow-none' type="text" />
                </div>
                <div>
                  <label htmlFor="name">Entity reg number</label>
                  <input id='entinput' className='form-control shadow-none' type="email" />
                </div>
                <div>
                  <label htmlFor="name">.</label>
                  <input id='entinput' className='form-control shadow-none' type="file" />
                </div>
              </div>
              
            </ent.Col>
            <div className='d-flex justify-content-center'>
              <button className='entbtn'>Add entity</button>
            </div>
          </ent.Row>
        </ent.Container>
        </ent.Container>

        <ent.Container>
          <div >
            <i><p className='myenti'>My entities</p></i>
          </div>
          <ent.Row>
            <ent.Col lg={12}>
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
      </div>
    </div>
  )
}

export default Entity