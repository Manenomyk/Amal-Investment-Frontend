import React, {useState, useEffect} from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import {Link} from 'react-router-dom';
import * as adminnew from 'react-bootstrap';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import axios from 'axios';


const user = JSON.parse(localStorage.getItem('auth_name'));
function AdminNewproject() {
  const [isOpen ,setIsOpen] = useState(false);


  
  const [details, getDetails] = useState([]);
  const getData = async () => {
      try {
          const data = await axios.get("/api/admin/projects/get");
          console.log(data.data.object);
          getDetails(data.data.project);
  
      } catch (e) {
          console.log("no execution");
         
      }
  };
  
  useEffect(()=>{
      getData();
  }, []);
  
  console.log('deta',details);

  
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
     
      <adminnew.Container >
             
             <adminnew.Nav className= "mt-2 pt-3 pb-2"
                   activeKey="/home"
                   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                 >
                   <adminnew.Nav.Item>
                     <adminnew.Nav.Link href="/AdminNewproject" id="actives">All projects</adminnew.Nav.Link>
                   </adminnew.Nav.Item>
                   <adminnew.Nav.Item>
                     <adminnew.Nav.Link href="/AdminAddproject" id="other">Add New project</adminnew.Nav.Link>
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
                 
               
                   <table className="table table-striped" style={{fontSize: "small"}}>
                                     <thead>
                                       <tr>
                                          
                                           <th scope="col">Project Name</th>
                                           <th scope="col">Sector</th>
                                           <th scope="col">Goal amount </th>
                                           <th scope="col">Max investment</th>
                                           <th scope="col">% Stake</th>
                                           <th scope="col">Opening date</th>
                                           <th scope="col">Closing date</th>
                                           <th scope="col">Deal type</th>
                                           <th scope="col">Action</th>
                                         </tr>
                                     </thead>

                                 <tbody>
                                    {details.map((item,index)=>(
           
                                    console.log('i',item),

                                    <tr key={index} >
                                     
                                     <td> { item.project_name}</td>
                                     <td>{ item.project_sector}</td>
                                     <td>{ item.goal_amount}</td>
                                     <td>{ item.max_investment}</td>
                                     <td>{ item.stake}</td>
                                     <td>{ item.opening_date}</td>
                                     <td>{ item.closing_date}</td>
                                     <td>{ item.project_name}</td>
                                     <td><Link to={"/ViewMoreShares"} >View more</Link></td>
                                     
         
                                   </tr>

                                 ))}

                                 
                                 </tbody>

                                

                       
                         </table> 

                         </adminnew.Container>
    </div>
  )
}

export default AdminNewproject