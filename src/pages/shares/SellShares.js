import React, {useState} from 'react';
import "./shares.css";
import Sidebar from '../../components/sidebar/Sidebar';
import ProfileNav from '../../components/card/ProfileNav';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";


function SellShares() {
  const [isOpen ,setIsOpen] = useState(false);
  return (
    <div>
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
                  <Sidebar/>

                  </div>

                  )  
                  }
              </div>

    <div className='section'>
    <Sidebar/>
    <ProfileNav/>

      <div className='join'>
          {/* sidebar div */}

          {/* invest page div */}

          <div className='container'>
              {/* navbar component */}
              <div id='card'>
                  <div id='card-body'>
                    <h2 id="card-title heading">Kazi Coffee</h2>
                    <div className="card-content ">
                        <p id="card-text">Number of shares:300M</p>
                        <p id="card-text">Share buying price:$100</p>
                        
                    </div> 
                    <div className="card-content ">
                    <p id="card-text">Current shares value:$200000</p>
                    <p id="card-text">Current Share price:$200</p>
                    
                </div>
                  </div>
              </div>

              <div className="form-group item ">
                <label for="">how many shares would you like to sell ? </label>
                <div className="join" style={{width: "80vw"}}>
                <input type="text"  className="form-control" style={{width: "20%"}} id="exampleFormControlInput1" placeholder="AMOUNT"></input>
                
                    <select>
                        <option >Euros</option>
                        <option>$USD</option>
                        <option>GBP</option>
                        <option>KSH</option>
                    </select>
                </div>
            </div>  

          
          </div>
      </div>
      </div>


  </div>
  );
}

export default SellShares;