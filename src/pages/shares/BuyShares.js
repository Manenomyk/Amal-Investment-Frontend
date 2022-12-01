import React, {useState} from 'react';
import "./shares.css";
import Sidebar from '../Sidebar/Sidebar';
import * as buy from 'react-bootstrap'; 
import tooltip from '../../images/Assets/icons/tooltip.png';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';



const user = JSON.parse(localStorage.getItem('auth_userName'));

function BuyShares() {


  
  const [isOpen ,setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [successResponse,setSuccessResponse]=useState("");
  const  [ receivedata, setdata] = useState({
    share:'',
    amountOfShares:'',
    agree:'',
    investAsPerson:'',
    investAsLegalEntity:''

  });

  const handleinput = (e) =>{
    e.persist();
    setdata({...receivedata, [e.target.name]: e.target.value});
  }

  const detailsubmit = (e) =>{
    e.preventDefault();

    const data ={
      share: receivedata.share,
      amountOfShares: receivedata.amountOfShares,
      agree: receivedata.agree,
      investAsPerson: receivedata.investAsPerson,
      investAsLegalEntity: receivedata.investAsLegalEntity,

    }
    try {
      axios.post(`/user/update-share-buy/${user.id}`, data ).then(res =>{
         console.log(res)

        setLoading(false);
          if(res.status === 201) {

            setSuccessResponse("you have been registered successfully.");
            setTimeout(() => {
              setSuccessResponse("")
            }, 2000);
    
              // alert("registered successfully")
              navigate('/login');
  
          } else {
  
          }
  
      }) .catch(res =>{
       
        
      setLoading(false);
      setServerError("Invalid credentials plz check them out")
      setTimeout(()=>{
        setServerError("")
      },2000)
      
      });
      


  } catch (error) {
      
      // alert("oops, invalid credentials")

      setLoading(false);
      setServerError("Invalid credentials.")
      setTimeout(()=>{
        setServerError("")
      },2000)
    
      navigate('/buyshares');
  }
  
  }
  
  return (
    <div className='d-flex'>
      
                <div style={{marginLeft:"45%",marginTop:"0%",position:"fixed", zIndex:"2"}}>
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
      
        <buy.Container>
          <buy.Row>
            <buy.Col lg={8} className="mx-auto mt-3">
              <buy.Card>
                <buy.Card.Title>
                  <h4 className='buytext'><u><i>Thanks for choosing to invest in uwezo estate</i></u></h4>
                </buy.Card.Title>
                <buy.Card.Body className='d-flex ' id='buydet'>
                  <p id="card-text">Share Price:$300M</p>
                  <p id="card-text">Min shares to buy:50M</p>
                  <p id="card-text">Max shares to buy:100</p>
                </buy.Card.Body>
              </buy.Card>
            </buy.Col>
          </buy.Row>

          <buy.Row className='mt-4'>
            <buy.Col lg={12}>
              <div id='buyamount' className='d-flex justify-content-center'>
                <p>How many shares would you like to buy? </p>
                <input placeholder='12' name='shares' onChange={handleinput} value={receivedata.shares} className='form-control shadow-none' id='buyinp' type="text" />
                <p>Total amount of shares </p>
                <input placeholder='$24 500' name='amountOfShares' onChange={handleinput} value={receivedata.amountOfShares} className='form-control shadow-none' id='buyinp1' type="text" />
              </div>
            </buy.Col>
          </buy.Row>

          <buy.Row>
            <buy.Col lg={8}>
                <div id='buyentin' className='d-flex justify-content-center mb-4'>
                  <p><b>I want to invest as:</b></p>
                  <div>
                    <div className="radio-items">
                      <input className="form-check-input"
                        type="radio"
                        name="investAsPerson"
                        onChange={handleinput} value={receivedata.investAsPerson}
                        // onClick="closeLegal()"
                        id="flexRadioDefault1" 
                        />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        person
                      </label>
                    </div>
                    <div className="radio-items" >
                      <input className="form-check-input"
                        type="radio"
                        name="investAsLegalEntity"
                        onChange={handleinput} value={receivedata.investAsLegalEntity}
                        id="flexRadioDefault1"
                        // onClick="openLegal() " 
                        />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Entity
                      </label>
                    </div>
                    <div id="legal-entity" >


                <select className='form-control shadow-none' name='investAsLegalEntity' onChange={handleinput} value={receivedata.investAsLegalEntity}>
                  <option >Legal entity</option>
                  <option>jamal enterprise</option>
                  <option>Lacharme collection</option>
                  <option>elfantasia group</option>
                </select>
              </div>
                  </div>
                  
                </div>
                <div className='buycheck'>
                <input className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        // onClick="openLegal() " 
                        />
                      <label className="form-check-label" htmlFor="flexRadioDefault1" name="agree" onChange={handleinput} value={receivedata.agree}>
                        I agree
                      </label>
                </div>
            </buy.Col>
          </buy.Row>
          <buy.Row>
            <buy.Col lg={12} id="buybtn" className=" d-flex justify-content-center">
              <div>
              <buy.Image
                className="d-block mx-auto"
                src={tooltip}
                style={{fontSize:"15px", cursor:"pointer"}}
                alt="First slide"
                fluid
                />
              </div>
              <div>
              <div>
                        {loading&&(
                            <button  onClick={detailsubmit} style={{fontSize:"18px",background:"transparent",color:"black",border:"none",marginLeft:"28px"}}><div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                            <div style={{display:"flex", flexDirection:"row"}}>
                            <Oval  height="20"
                            width="20"
                            color='blue'
                            ariaLabel='loading'/>
                        <span style={{fontSize:"20px"}}>Signing in...</span>
                    </div>
                </div>
            </button>
                        )}

                        {!loading &&(
                        <button className='buybtn'>BUY</button>
                        )}
                    </div>
                
              </div>
            </buy.Col>
          </buy.Row>
        </buy.Container>

         
    </div>
  );



}

export default BuyShares;
