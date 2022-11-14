import React, { useState } from "react";
// import Navbar from '../Navbar/Navbar';
import { Sbarcontent } from './Sbarcontent';
import { IoIosContact } from "react-icons/io";
import { MdLogout } from "react-icons/md";
// import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/Assets/icons/logo 1.png';
import * as sbarmain from 'react-bootstrap';
import axios from 'axios';



import './Sidebar.css';

function Sidebar() {



    const [serverError, setServerError] = useState("")
    const [loading, setLoading] = useState(false);
    const [successResponse,setSuccessResponse]=useState("");
    const navigate = useNavigate();
    const logoutSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        axios.post(`/api/logout`) .then(res =>{
            setLoading(false);

            if (res.status === 200) {

                localStorage.removeItem("auth_token");
                localStorage.removeItem("auth_name", JSON.stringify(res.data.user));
        
        
                setSuccessResponse("you have been registered successfully.");
                setTimeout(() => {
                  setSuccessResponse("")
                }, 2000);

                navigate('/');
    
    
            } else {
    
                alert("Log out Incomplete")
    
            }
        }).catch(res =>{

                
            setLoading(false);
            setServerError("Failed to log out")
            setTimeout(()=>{
                setServerError("")
            },2000)

                
                });
    }




    return ( 
        <div>
        

           <div style={{marginLeft:"40%",marginTop:"0%",position:"fixed", zIndex:"2"}}>
                                {successResponse && (
                                     <div 
                                     style={{color:"white",fontSize:"15px",width:"120%",right:"0", background:"#28a745",
                                     borderRadius: "15px", paddingTop:"15px",paddingBottom:"15px",paddingLeft:"6%",border:"1px solid lightgray",opacity:"0.7",transition:"0.5"}}>
                                     {successResponse}
                                    </div>
                                      
                                 )}
                                   {serverError && (
                                     <div 
                                    style={{color:"white",fontSize:"15px",width:"120%",right:"0", background:"#ED4337",
                                    borderRadius: "15px", paddingTop:"15px",paddingBottom:"15px",paddingLeft:"6%",border:"1px solid lightgray",opacity:"0.7",transition:"0.5"}}>
                                    {serverError}
                                    </div>
                                      
                                 )}
             </div>




            <div className='sbar'>

                <div className="topsbar">
                    <div className="sbaricon">
                        <IoIosContact />
                    </div>

                    <div className="sbarname">
                        <h5>Bahati Mike</h5>
                        <p><i>mike@gmail.com</i></p>
                    </div>
                </div>
                <hr />

                
                <ul className='list'>
                     {Sbarcontent.map((val,key)=>{
                    return (
                        
                        <li key={key} 
                        
                        className="row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={()=>{window.location.pathname = val.link}}> 

                        <div id='icon'>
                            
                        {val.icon}
                        </div>


                          <div id='title'>
                              {val.title}
                          </div>

                          
                        </li> 
                    );
                     
                    })}
                </ul>

     <div className="d">
     <sbarmain.Image
        className="d-block mx-auto mt-2"
        src={logo}
        style={{width:"220px", margin:'1px'}}
        alt="First slide"
        fluid
        />
     </div>
{/* 
                <div className='log'>
                <div>
                        {loading&&(
                            <button onClick={logoutSubmit} style={{fontSize:"18px",background:"transparent",color:"black",border:"none",marginLeft:"28px"}}><div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                            <div style={{display:"flex", flexDirection:"row"}}>
                            <Oval  height="20"
                            width="20"
                            color='blue'
                            ariaLabel='loading'/>
                        <span style={{fontSize:"20px"}}>Logging out</span>
                    </div>
                </div>
            </button>
                        )}

                        {!loading &&(
                            <h5> <MdLogout id='logouticon' />
                    <button onClick={logoutSubmit} style={{border:'none', background:"transparent"}}>Logout</button></h5>
                        )}
                    </div>
                </div> */}

            </div>
        </div>
     );
}

export default Sidebar;
