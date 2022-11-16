import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import * as adminshares from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Adminshares() {
  return (
    <div className='d-flex'>
      <AdminSidebar/>

      <adminshares.Container >
             
             <adminshares.Nav className= "mt-2 pt-3 pb-2"
                   activeKey="/home"
                   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                 >
                   <adminshares.Nav.Item>
                     <adminshares.Nav.Link href="/home" id="actives">Existing shares</adminshares.Nav.Link>
                   </adminshares.Nav.Item>
                   <adminshares.Nav.Item>
                     <adminshares.Nav.Link href="/Newshares" id="other">New shares</adminshares.Nav.Link>
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
                 
               
                   <table className="table table-striped" style={{fontSize: "small"}}>
                                     <thead>
                                       <tr>
                                          
                                           <th scope="col">Company Name</th>
                                           <th scope="col">Sector</th>
                                           <th scope="col">Total shares </th>
                                           <th scope="col">Share prices</th>
                                           <th scope="col">Share value</th>
                                           <th scope="col">Action</th>
                                         </tr>
                                     </thead>

                                 <tbody>
                                   <tr>
                                     
                                     <td>kazi Coffee</td>
                                     <td>Agriculture</td>
                                     <td>10,000</td>
                                     <td>100</td>
                                     <td>60M</td>
                                     <td><Link to={"/MoreShares"} >View more</Link></td>
                                     
         
                                   </tr>
                                 </tbody>

                                 <tbody>
                                   <tr>
                                     
                                     <td>Good House</td>
                                     <td>Real Estate</td>
                                     <td>20,000</td>
                                     <td>100</td>
                                     <td>20M</td>
                                     <td><Link to={"/MoreShares"} >View more</Link></td>
                                   </tr>
                                 </tbody>

                                 <tbody>
                                   <tr>
                                     
                                     <td>Cut Bank</td>
                                     <td>Finance</td>
                                     <td>50,000</td>
                                     <td>100</td>
                                     <td>5M</td>
                                     <td><Link to={"/MoreShares"} >View more</Link></td>
                                   </tr>
                                 </tbody>

                                 <tbody>
                                   <tr>
                                    
                                     <td>Net Tech</td>
                                     <td>Technology</td>
                                     <td>10,000</td>
                                     <td>100</td>
                                     <td>4M</td>
                                     <td><Link to={"/MoreShares"} >View more</Link></td>
                                   </tr>
                                 </tbody>
                         </table> 

                         </adminshares.Container>
    </div>
  )
}

export default Adminshares