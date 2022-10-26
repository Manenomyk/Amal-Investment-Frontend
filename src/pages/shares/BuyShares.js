import React from 'react';
import "./shares.css";
import ProfileNav from '../../components/card/ProfileNav';
import Sidebar from '../../components/sidebar/Sidebar';
import Tooltip from '../../components/tooltip/tooltipAB';
// import ProfileNav from '../../components/card/ProfileNav';
// import Sidebar from '../../components/sidebar/Sidebar';
function BuyShares() {
  return (
    <div>

      <div className='section'>
        <Sidebar />
        <ProfileNav />
        <div className='join'>
          {/* sidebar div */}

          {/* invest page div */}

          <div className='container'>
            {/* navbar component */}
            <div id='card'>
              <div id='card-body'>
                <h2 id="card-title heading">Thanks for choosing to invest in uwezo estate</h2>
                <div className="card-content ">
                  <p id="card-text">Share Price:$300M</p>
                  <p id="card-text">Min shares to buy:50M</p>
                  <p id="card-text">Max shares to buy:100</p>
                </div>

              </div>
            </div>


            <div className="form-check-radio">
              <p className="radio-items">i want to invest as :</p>
              <div className="radio-items">
                <input className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  onclick="closeLegal()"
                  id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                  person
                </label>
              </div>
              <div className="radio-items" >
                <input className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onclick="openLegal() " />
                <label className="form-check-label" for="flexRadioDefault1">
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

            
          </div>
        </div>

        <div><tooltip/></div>

      </div>
    </div>
  );



}

export default BuyShares;
