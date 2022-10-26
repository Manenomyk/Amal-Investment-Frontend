import React from 'react';
import "./shares.css";
function ViewMoreShares() {
  return (
    <div>
    <div className="wrapper">
        <nav id="sidebar">
            <div className="sidebar-header">
                <img src="./images/Assets/icons/172626_user_male_icon.png" className="img-fluid d-inline py-5" alt=""/>
                <h6 className="d-inline ">Jim Garfield</h6>
                <hr/>
            </div>
            <ul className="list-unstyled components py-5">
            
              <li> <a href="#"><img src="./images/Assets/icons/211676_home_icon.png" className="img-fluid me-3" style= {{height:"50px", width:"50px"}} alt=""/>Home</a> </li>
                <li> <a href="#"><img src="./images/Assets/icons/211873_person_stalker_icon.png" className="img-fluid me-3" style= {{height:"50px", width:"50px"}} alt=""/>Profile</a> </li>
                <li> <a href="#"><img src="./images/Assets/icons/Loaning.png" className="img-fluid me-3" style= {{height:"50px", width:"50px"}}alt=""/>Investment</a> </li>
                <li> <a href="#"><img src="./images/Assets/icons/3890929_chart_growth_invest_market_stock_icon.png" className="img-fluid me-3" style= {{height:"50px", width:"50px"}} alt=""/>Shares</a> </li>             
            </ul>
            <ul className="list-unstyled CTAs">
                <li> <a href="#" className="pt-5 mt-5"><img src="./images/Assets/icons/logo 1.png" className="img-fluid  py-5 pb-5"  alt=""/></a> </li>
            </ul>
      </nav>
        
        
            <div className="container">
                        <div className="card p-1">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-2">
                                    <nav className=""><button type="button" id="sidebarCollapse" className="btn btn-info"> <i className="fa fa-align-justify"></i> </button> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button></nav>
                                </div>
                                <div className="col-md-2 col-sm-4 col-5">Investor Jim</div>
                                <div className="col-md-6 col-sm-5 col-3"></div>
                                <div className="col-md-1 col-sm-1 col-2"><a href=""><img src="./images/Assets/icons/4781824_alarm_alert_attention_bell_clock_icon.png"weight="30" height="30" className="small" alt=""/></a></div>
                                <div className="col-md-1 col-sm-1 col-2"><a href=""><img src="./images/Assets/icons/172626_user_male_icon.png" className="small" weight="30" height="30" /></a></div>
                            </div>
                            </div>
                        </div>

            <div classname="card ">
                <div classname="card-body">
                  <h2 classname="card-title heading">Kazi Coffee</h2>
                  <div classname="card-content ">
                      <p classname="card-text">Shares purchase price:$100 </p>
                      <p classname="card-text">Share price:$300</p>

                  </div>
                  <div classname="card-content ">
                    <p classname="card-text">Total value of shares:1M</p>
                    <p classname="card-text">Number of shares:10,000</p>
                    
                </div>

                <div classname="card-content ">
                    <p classname="card-text">Total value of shares now:3M</p>
                    <p classname="card-text">Date of purchase:20/04/2022</p>
                    
                </div>
                </div>
                <h2 style="text-align: center; font-weight: 500; font-size: 24px; border-top:10px;">Bought under Jenga builders</h2>
            </div>

           <div>
               <button classname="btn" onclick="openForm()">Raise capital</button>
               <div classname="popup" id="myForm">
                   <button type="button" style="text-align: right;"
                   classname="btn-close" 
                   aria-label="Close" id="myForm" 
                   onclick="closeForm()" ></button>
                   <p>You have successfully invested in a project</p>
               </div>
           </div>
           </div>
           </div>
           </div>
          
  );
}

export default ViewMoreShares;