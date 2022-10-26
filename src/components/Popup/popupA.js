import React, { useState } from 'react';
import Popup from './Popup';
import "./popup.css"
//  import  {BsFillXCircleFill} from "react-icons/bs"


function PopupA() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <input
    id='btn'
      type="button"
      value="BUY"
      onClick={togglePopup}
    />
    
    {isOpen && <Popup
      content={<>
     
        you have successfully invested in a project
      </>}
      handleClose={togglePopup}
    />}
  </div>




}

export default PopupA;