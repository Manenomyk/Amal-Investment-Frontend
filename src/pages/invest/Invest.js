import React from 'react';
import ProfileNav from '../../components/card/ProfileNav';
import Sidebar from '../../components/sidebar/Sidebar';
import Tooltip from '../../components/tooltip/tooltipA';
import "./invest.css";

function Invest() {

  return (
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
                    <h2 id="card-title heading">Thanks for choosing to invest in uwezo estate</h2>
                    <div className="card-content ">
                        <p id="card-text">Goal Amount:$300M</p>
                        <p id="card-text">Goal Amount:$300M</p>
                        <p id="card-text">Goal Amount:$300M</p>
                    </div> 
                    <div className="card-content ">
                    <p id="card-text">Due Date:9/04/2022</p>
                    <p id="card-text">Type:Equity | Debt |revenue share</p>
                    
                </div>
                  </div>
              </div>

              <div className="form-group item ">
                <label htmlFor="">amount you want to raise </label>
                <div className="join" style={{width: "70vw"}}>
                <input type="text"  className="form-control" style={{width: "20%"}} id="exampleFormControlInput1" placeholder="AMOUNT"></input>
                
                    <select>
                        <option >Euros</option>
                        <option>$USD</option>
                        <option>GBP</option>
                        <option>KSH</option>
                    </select>
                </div>
            </div> 
            <div className="form-check">
                <h4>Deal Type?</h4>
                <div>
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        Equity :
                    </label>
                    <input style={{marginLeft:"90px"}} className="boarderless" type="text" placeholder="Amount"/>
                     
                </div>
                <div>

                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                    Debt :
                    </label>
                    <input className="boarderless" type="text" placeholder="Amount" style={{marginLeft: "100px"}}/>
                </div>
                <div>

                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                    revenue share :
                    <input style={{marginLeft: "10px"}} className="boarderless" type="text" placeholder="Amount"/>
                    </label>
                </div>
            </div>

            <div className="form-check-radio">
                <p className="radio-items">i want to invest as :</p>
                <div className="radio-items">
                    <input className="form-check-input"
                     type="radio" 
                     name="flexRadioDefault" 
                    //  onClick="closeLegal()"
                     id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        person
                    </label>
                </div>
                <div className="radio-items" >
                    <input className="form-check-input" 
                    type="radio"
                    name="flexRadioDefault" 
                    id="flexRadioDefault1"
                    // onClick="openLegal() "
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Entity
                    </label> 
                </div>
                <div id="legal-entity" >
                
                                    
                    <select>
                        <option >Legal entity</option>
                        <option>jamal enterprise</option>
                        <option>Lacharme collection</option>
                        <option>elfantasia group</option>
                    </select>
            </div> 
            </div>

            <div><Tooltip/></div>
          </div>
      </div>
    </div>
  );
}

export default Invest;
