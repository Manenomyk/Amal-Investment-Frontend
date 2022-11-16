import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import * as admi from 'react-bootstrap';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className='d-flex'>
      <AdminSidebar />
      <admi.Container>
      <table  className="table" style= { { width: "70%",marginLeft:"15%"}}>
     
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
      </admi.Container> 
    </div>
  )
}

export default AdminDashboard