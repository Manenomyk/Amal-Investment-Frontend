import React, {useState} from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import * as adminshares from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function AdminNewshares() {

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

              <adminshares.Container>
                 <adminshares.Nav className= "mt-2 pt-3 pb-2"
                   activeKey="/home"
                   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                 >
                   <adminshares.Nav.Item>
                     <adminshares.Nav.Link href="/adminshares" id="other">Existing shares</adminshares.Nav.Link>
                   </adminshares.Nav.Item>
                   <adminshares.Nav.Item>
                     <adminshares.Nav.Link href="/AdminNewshares" id="actives">New shares</adminshares.Nav.Link>
                   </adminshares.Nav.Item>
             </adminshares.Nav>

             <adminshares.Card>
               <adminshares.Card.Body>
               <adminshares.Row>
                   <adminshares.Col md= {8} sm= {4} xs= {12} >
                   <input type="text" placeholder="Search"/>
                   </adminshares.Col>
                   <adminshares.Col md= {2} sm= {3} xs= {4}><button  id='entibtn' className="btn btn-outline-dark">Filter</button></adminshares.Col>
                   <adminshares.Col md= {2} sm= {1} xs= {2}><button id='entibtn' className="btn btn-outline-dark">Export</button></adminshares.Col>
                   </adminshares.Row>
                   </adminshares.Card.Body>
             </adminshares.Card>


             <adminshares.Row className='mt-2'>
                <adminshares.Col id='raisecont' lg={9} className=" mx-auto mt-2 pt-4">

                <div>
                 
                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Company name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      />
                    </div>
                    <div>
                      Sector
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      />
                    </div>
                   
                  </div>
             </div>
                    


                       
                <div className='mt-4 mb-4'>
                  
                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Total shares
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      />
                    </div>
                    <div>
                      Share prices
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      />
                    </div>
                    
                  </div>

                  <div  id='deta' className='d-flex justify-content-center mt-4 mb-4'>
                    <div>
                      Shares on offer
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      />
                    </div>
                    <div>
                      Max shares to buy
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      />
                    </div>

                  </div>


                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Min shares to buy
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      />
                    </div>

                  </div>


                  </div>
                  
                  
                  <div id='deta' className='d-flex justify-content-center mt-3'>
                       
                        <button className='probtn' type='submit'><i>Create Shares</i></button>
                    </div>
                  
                    {/* <RaiseFormi /> */}
                </adminshares.Col>
            </adminshares.Row>
        </adminshares.Container>
    </div>
  )
}

export default AdminNewshares