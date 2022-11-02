import React from 'react';
import { BsUpload } from 'react-icons/bs';
import Sidebar from '../Sidebar/Sidebar';
import "./raise.css";
import ProfileNav from '../../components/card/ProfileNav';



import "./raise.css";
import {FaUpload } from "react-icons/fa";
import Tooltip from '../../components/tooltip/Tooltip';
function Raise() {
  return (
      <div className='d-flex'>

          <Sidebar/>
          
      <section>
      {/* <div className='section'>
      
      
      
      {/* body */}
              <div  className="formu">
                {/* navbar */}
                
                <h1 className="head">Personal Details</h1><br/>
                    <div className="top-row">
                        <div className="unity ">
                            <label for="">first name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="jim"/>
                        </div>
                        <div className="unity">
                            <label for="">Second name </label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Garfield"/>
                        </div>
                        
                        <div className="unity">
                            <label for="">Citizenship</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Kenya</option>
                            <option>Uganda</option>
                            <option>U.S</option>
                            <option>Tanzania</option>
                            <option>Rwanda</option>
                        </select>
                        </div>
                    </div>

                    <div class="top-row">
                            <div class="unity ">
                                <label for="">first name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="jim"/>
                            </div>
                            <div class="unity">
                                <label for="">Phone Number </label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="0712345678"/>
                            </div>
                            <div class="unity">
                                <label for="">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="jimGarfield@gmail.com"/>
                            </div>
                        </div>    
                        <div class="top-row">
                            {/* <!-- <label for="formFile" class="form-label">Default file input example</label> --> */}
                            <input type="file" id='fil' accept='image/*' />
                  <label id='lab' htmlFor="fil" style={{fontSize:"11px",width:"150px", paddingTop:"5px", marginTop:"20px",marginLeft:"20px"}}>Upload reg documents<FaUpload style={{width:"9px", marginLeft:"4px"}}/></label>
                  
                          
                        
</div>



               <h1 className="head">Entity Details</h1><br/>
                    <div className="top-row">
                        <div className="unity ">
                            <label for="">Entity name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="jim"/>
                            </div>
                        <div className="unity">
                            <label for="">Directors name </label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Garfield"/>
                        </div>
                        
                        <div className="unity">
                            <label for="">Citizenship</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Kenya</option>
                            <option>Uganda</option>
                            <option>U.S</option>
                            <option>Tanzania</option>
                            <option>Rwanda</option>
                        </select>
                        </div>
                    </div>



                    <div className="top-row">
                            <div className="unity ">
                                <label for="">ID Number</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="jim"/>
                            </div>
                            <div className="unity">
                                <label for="">Phone Number </label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="0712345678"/>
                            </div>
                            <div className="unity">
                                <label for="">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="jimGarfield@gmail.com"/>
                            </div>
                        </div>    
                        
                        <div className="top-row">
                            {/* <!-- <label or="formFile" class="form-label">Default file input example</label> --> */}
                            <input type="file" id='fil' accept='image/*' />
                  <label id='lab' htmlFor="fil" style={{fontSize:"11px",width:"150px", paddingTop:"5px", marginLeft:"20px"}}>Upload KRA pin <FaUpload style={{width:"9px", marginLeft:"4px"}}/></label>
                  
                          </div>
                          <div className="top-row">
                            {/* <!-- <label for="formFile" class="form-label">Default file input example</label> --> */}
                            <input type="file" id='fil' accept='image/*' />
                  <label id='lab' htmlFor="fil" style={{fontSize:"11px",width:"150px", paddingTop:"5px", marginTop:"20px",marginLeft:"20px"}}>Upload business permit<FaUpload style={{width:"9px", marginLeft:"4px"}}/></label>
                  
                          </div>
                          <label  for=""style={{paddingLeft:"20px"}}>amount you want to raise </label>
                <div className="join" style={{width: "70vw",paddingLeft:"20px"}}>
                <input type="text"  className="form-control" style={{width: "20%"}} id="exampleFormControlInput1" placeholder="AMOUNT"></input>
                
                    <select>
                        <option >Euros</option>
                        <option>$USD</option>
                        <option>GBP</option>
                        <option>KSH</option>
                    </select>
                </div>
            
                <div><Tooltip/></div>
</div>

 
</section>
      </div>

    
);
}

export default Raise;