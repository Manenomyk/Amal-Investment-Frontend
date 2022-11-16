import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { Link } from "react-router-dom";
import * as admininve from 'react-bootstrap';
import './Investors.css';

function Investors() {
  return (
    <div className='d-flex'>
      <AdminSidebar/>

    <admininve.Container>
    <table className="table table-striped mt-4" style={{fontSize: "small"}}>
                                      <thead>
                                        <tr>
                                            
                                            <th scope="col">Investor Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone number </th>
                                            <th scope="col">Entity</th>
                                            <th scope="col">Action</th>
                                          </tr>
                                      </thead>

                                  <tbody>
                                    <tr>
                                      
                                      <td>kazi Coffee</td>
                                      <td>Agriculture</td>
                                      <td>10,000</td>
                                      <td>100</td>
                                     
                                      <td><Link to={"/Approveinvestor"} >View more</Link></td>
                                      
          
                                    </tr>
                                  </tbody>

                                  <tbody>
                                    <tr>
                                      
                                      <td>Good House</td>
                                      <td>Real Estate</td>
                                      <td>20,000</td>
                                      <td>100</td>
                                      
                                      <td><Link to={"/Approveinvestor"} >View more</Link></td>
                                    </tr>
                                  </tbody>

                                  <tbody>
                                    <tr>
                                     
                                      <td>Cut Bank</td>
                                      <td>Finance</td>
                                      <td>50,000</td>
                                      <td>100</td>
                                      
                                      <td><Link to={"/Approveinvestor"} >View more</Link></td>
                                    </tr>
                                  </tbody>

                                  <tbody>
                                    <tr>
                                     
                                      <td>Net Tech</td>
                                      <td>Technology</td>
                                      <td>10,000</td>
                                      <td>100</td>
                                      
                                      <td><Link to={"/Approveinvestor"} >View more</Link></td>
                                    </tr>
                                  </tbody>
 
                        
                          </table> 
    </admininve.Container>
    </div>
  )
}

export default Investors