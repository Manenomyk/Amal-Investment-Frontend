import React, {useState} from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import {Link} from 'react-router-dom';
import * as adminnew from 'react-bootstrap';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function AdminAddproject() {

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


              <adminnew.Container>
                <adminnew.Nav className= "mt-2 pt-3 pb-2"
                   activeKey="/home"
                   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                 >
                   <adminnew.Nav.Item>
                     <adminnew.Nav.Link href="/AdminNewproject" id="other">All projects</adminnew.Nav.Link>
                   </adminnew.Nav.Item>
                   <adminnew.Nav.Item>
                     <adminnew.Nav.Link href="/AdminAddproject" id="actives">Add New project</adminnew.Nav.Link>
                   </adminnew.Nav.Item>
                 </adminnew.Nav>

                    <adminnew.Card>
                    <adminnew.Card.Body>
                    <adminnew.Row>
                        <adminnew.Col md= {8} sm= {4} xs= {12} >
                        <input type="text" placeholder="Search"/>
                        </adminnew.Col>
                        {/* <adminnew.Col md= {2} sm= {3} xs= {4}><button  id='entibtn' className="btn btn-outline-dark">ADD</button></adminnew.Col> */}
                        <adminnew.Col md= {2} sm= {3} xs= {4}><button  id='entibtn' className="btn btn-outline-dark">Filter</button></adminnew.Col>
                        <adminnew.Col md= {2} sm= {1} xs= {2}><button id='entibtn' className="btn btn-outline-dark">Export</button></adminnew.Col>
                        </adminnew.Row>
                        </adminnew.Card.Body>
                    </adminnew.Card>
                 


            <adminnew.Row className='mt-2'>
                <adminnew.Col id='raisecont' lg={9} className=" mx-auto mt-2 pt-4">

                <div>
                 
                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Project name
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
                      Goal amount
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      />
                    </div>
                    <div>
                      Max investment
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      />
                    </div>
                    
                  </div>

                  <div  id='deta' className='d-flex justify-content-center mt-4 mb-4'>
                    <div>
                      % Stake
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      />
                    </div>
                    <div>
                      Opening date
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      />
                    </div>

                  </div>


                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Closing date
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      />
                    </div>

                  </div>


                  </div>
                  
                  
                  <div id='deta' className='d-flex justify-content-center mt-3'>
                       
                        <button className='probtn' type='submit'><i>Create project</i></button>
                    </div>
                  
                    {/* <RaiseFormi /> */}
                </adminnew.Col>
            </adminnew.Row>
        </adminnew.Container>
    </div>
  )
}

export default AdminAddproject