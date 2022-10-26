import React, { useState } from 'react';
import Popup from './Popup';
import "./popup.css"
 import  {BsFillXCircleFill} from "react-icons/bs"


function PopupContent() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <input
    id='btn'
      type="button"
      value="Raise Capital"
      onClick={togglePopup}
    />
    
    {isOpen && <Popup
      content={<>
     
        you have successfully raised capital you will be contacted by our team in 3 days to verify your request
      </>}
      handleClose={togglePopup}
    />}
  </div>




}

export default PopupContent;