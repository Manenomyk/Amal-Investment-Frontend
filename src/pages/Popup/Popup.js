import React, { useState } from "react";
import "./ Popup.css";

export default function Popup(){

    const [popup, setPopup]=useState(false);

    const togglePopup = () => {
        setPopup(!popup)
    }

    return(
        <div>

        <button
        
        onClick={togglePopup}
        className="btnpop" >

        Submit
        </button>


        {popup && (

            <div className="message">
            <p>
                You have successfully updated your profile
            </p>
            <button className="close"  onClick={togglePopup}>
                close
            </button>
            </div>

        )}


        </div>
    )
}