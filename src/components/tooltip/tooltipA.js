import React from 'react';
import "./Tooltip.css";
import PopupContent from '../Popup/popupA';

import image from "../../images/Assets/icons/tooltip.png"

export default function Tooltip() {

    // pop up fuction
    const offset = {
        left: 150,
        top: 1150,
      };
  return (
    <div className="bottombtn join">
    <div id="tooltipp">
        <img className="blue-iconn"   src={image}/> 
        
       <span className="tooltiptext">    
  
           
          <h4 className="tooltipp-heading" >Disclaimer </h4>
                       
            
           <p className="tooltipp-text" style={{color:"red", padding:"12px"}}>An investor may get back less than the amount invested</p>
       </span>
       
  
   </div> 

    <div >
        <PopupContent/>
    {/* <Popup trigger={<button style={{ backgroundColor: "#007CBA",
    color: "white",
    borderRadius: "30px",
    marginTop: "0px",
    marginLeft: "15px",
    marginBottom:"160%",
    width:"120px",
    height: "40px"}} offset={offset} > Raise Capital</button>} position="top center">
        <div>You have successfully invested in a project</div>
    </Popup> */}

       {/* <button id="btn" onClick={openForm()}>Raise capital</button>
       <div className="popup" id="myForm">
           <button type="button" style={{textAlign:" right"}}
           className="btn-close" 
           aria-label="Close" id="myForm" 
           onClick={closeForm()} ></button>
           <p>You have successfully invested in a project</p>
       </div> */}
   </div> 
</div>  
  );
}
