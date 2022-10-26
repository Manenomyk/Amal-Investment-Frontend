import React from 'react';
import ProfileNav from '../../../components/card/ProfileNav';
import Sidebar from '../../../components/sidebar/Sidebar';
function ProjectApproval() {
  return (
    <div style={{fontFamily: "arial",}}>
    <Sidebar/>
    {/* <ProfileNav/> */}

      <div className='page' style={{ padding: "20px",background: "white", width: "45%", marginLeft:"30%",marginTop:"8%", boxShadow:"0px 3px 5px rgba(0, 0, 0, 0.5)" }}>
        
        <input style={{marginLeft:"30%", marginBottom:"20px"}}  className='detailsInput' type="text" />
  <div style={{ display: "flex", marginBottom: "20px", fontSize:"13px"}}>
        {/* <div style={{marginBottom:"4%"}}> */}

        <label style={{marginLeft:"10%"}}>Goal amount:</label>
        <input style={{border:"", width:"50px" }} className='detailsInput' type="text" />

        {/* </div> */}

        {/* <div style={{}}> */}

         <label style={{marginLeft:"10%"}} >Min investment:</label>
         <input style={{border:"", width:"50px" }} className='detailsInput' type="email" />

       {/* </div> */}
   </div>      



   <div style={{ display: "flex", marginBottom: "20px", fontSize:"13px"}}>
        {/* <div style={{marginBottom:"2%"}}> */}

        <label style={{marginLeft:"10%"}}>Due date: </label>
        <input style={{border:"", width:"50px" }} className='detailsInput' type="text" />

        {/* </div> */}

        {/* <div style={{}}> */}

         <label style={{marginLeft:"15%"}}>Max investment</label>
         <input style={{border:"", width:"50px" }} className='detailsInput' type="email" />

       {/* </div> */}
   </div>   

   <div style={{ display: "flex"}}>
        {/* <div style={{marginBottom:"2%"}}> */}

        <label style={{marginLeft:"20%", fontSize:"13px"}}>Type: </label>
        <input style={{border:"", width:"" }} className='detailsInput' type="text" />

        {/* </div> */}


   </div>   


      </div>

          <div>
            <button style={{padding:"4px", marginLeft:"50%", background:'#007CBA', marginTop:"8%", color:"white", border:"0px", borderRadius:"7px"}}>Approve</button>
          </div>
    </div>
  );
}

export default ProjectApproval;
 