import React from 'react';
import ProfileNav from '../../components/card/ProfileNav';
import Sidebar from '../../components/sidebar/Sidebar';

function InvestorApproval() {
  return (
    <div style={{fontFamily: "arial",}}>
    <Sidebar/>
    <ProfileNav/>
      <div className='page' style={{ padding: "20px",background: "white", width: "45%", marginLeft:"30%",marginTop:"8%", boxShadow:"0px 3px 5px rgba(0, 0, 0, 0.5)" }}>
        
      
      <p style={{marginLeft:"30%", marginBottom:"20px"}}><b><u><i>Investor approval</i></u></b></p>

        <table>

          <thead>
            <tr>
              <th style={{marginLeft:"30%", gap:"20px"}}><u><i>Name</i></u></th>
              <th><u><i>Email</i></u></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{paddingLeft:"30px"}}> Maike</td>
              <td style={{paddingLeft:"90px"}}>Maike@gmail.com</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th><u><i>Phone number</i></u></th>
              <th><u><i>Entity</i></u></th>
            </tr>
          </thead>

          <tbody>
            <tr style={{paddingLeft:"40px"}}>
              <td style={{paddingLeft:"40px"}}>Maike</td>
              <td style={{paddingLeft:"90px"}}>Maike@gmail.com</td>
            </tr>
          </tbody>


          

        </table>



     </div>
     <div>
            <button style={{padding:"4px", marginLeft:"50%", background:'#007CBA', marginTop:"8%", color:"white", border:"0px", borderRadius:"7px"}}>Approve</button>
          </div>
    </div>
  );
}

export default InvestorApproval;
 