import React, {useState} from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import {Link} from 'react-router-dom';
import * as adminnew from 'react-bootstrap';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



const user = JSON.parse(localStorage.getItem('auth_name'));
function AdminAddproject() {

    const [isOpen ,setIsOpen] = useState(false);


     
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("")
  const [loading, setLoading] = useState(false);
  const [successResponse,setSuccessResponse]=useState("");
  // const [errors, seterrors] = useState({});
  const [isSub, setsub] = useState(false);
  const [reg, setregInput] = useState({
    project_name:'',
    project_sector:'',
    goal_amount:'',
    max_investment:'',
    stake:'',
    opening_date:'',
    closing_date:'',
      
  }); 
  
  const handleIput = (e) => {
      e.persist();
      setregInput({...reg, [e.target.name]: e.target.value})
  }
  
  const regSubmit = (e) => {
  e.preventDefault();
  
  // seterrors(validate(reg));
  setsub(true);
  
  const details = {
      project_name: reg.project_name,
      project_sector: reg.project_sector,
      goal_amount: reg.goal_amount,
      max_investment: reg.max_investment,
      stake: reg.stake,
      opening_date: reg.opening_date,
      closing_date: reg.closing_date,
  
  }
  
  setLoading(true);
  try {
      axios.post(`/api/admin/projects/add/${user.user.id}`, details ).then(res =>{
         console.log(res)

        setLoading(false);
          if(res.status === 200) {

            setSuccessResponse(" Profile updated successfully.");
            setTimeout(() => {
              setSuccessResponse("")
            }, 2000);
    
              alert("registered successfully")
              // navigate('/clerklogin');
  
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
    
      // navigate('/clerkregister');
  }
      
  
      }



  return (
    <div className='d-flex'>
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
                  <AdminSidebar/>

                  </div>

                  )  
                  }
              </div>


              <adminnew.Container>
                <adminnew.Nav className= "mt-2 pt-3 pb-2"
                   activeKey="/home"
                   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                 >
                   <adminnew.Nav.Item>
                     <adminnew.Nav.Link href="/AdminNewproject" id="other">All projects</adminnew.Nav.Link>
                   </adminnew.Nav.Item>
                   <adminnew.Nav.Item>
                     <adminnew.Nav.Link href="/AdminAddproject" id="actives">Add New project</adminnew.Nav.Link>
                   </adminnew.Nav.Item>
                 </adminnew.Nav>

                    <adminnew.Card>
                    <adminnew.Card.Body>
                    <adminnew.Row>
                        <adminnew.Col md= {8} sm= {4} xs= {12} >
                        <input type="text" placeholder="Search"/>
                        </adminnew.Col>
                        {/* <adminnew.Col md= {2} sm= {3} xs= {4}><button  id='entibtn' className="btn btn-outline-dark">ADD</button></adminnew.Col> */}
                        <adminnew.Col md= {2} sm= {3} xs= {4}><button  id='entibtn' className="btn btn-outline-dark">Filter</button></adminnew.Col>
                        <adminnew.Col md= {2} sm= {1} xs= {2}><button id='entibtn' className="btn btn-outline-dark">Export</button></adminnew.Col>
                        </adminnew.Row>
                        </adminnew.Card.Body>
                    </adminnew.Card>
                 


            <adminnew.Row className='mt-2'>
                <adminnew.Col id='raisecont' lg={9} className=" mx-auto mt-2 pt-4">

                <div>
                 
                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Project name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      name="project_name"
                      onChange={handleIput} value={reg.project_name}
                      />
                    </div>
                    <div>
                      Sector
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      name="project_sector"
                      onChange={handleIput} value={reg.project_sector}
                      />
                    </div>
                   
                  </div>
             </div>
                    


                       
                <div className='mt-4 mb-4'>
                  
                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Goal amount
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      name="goal_amount"
                      onChange={handleIput} value={reg.goal_amount}
                      />
                    </div>
                    <div>
                      Max investment
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      name="max_investment"
                      onChange={handleIput} value={reg.max_investment}
                      />
                    </div>
                    
                  </div>

                  <div  id='deta' className='d-flex justify-content-center mt-4 mb-4'>
                    <div>
                      % Stake
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      name="stake"
                      onChange={handleIput} value={reg.stake}
                      />
                    </div>
                    <div>
                      Opening date
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      name="opening_date"
                      onChange={handleIput} value={reg.opening_date}
                      type="date"
                      />
                    </div>

                  </div>


                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Closing date
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      name="closing_date"
                      onChange={handleIput} value={reg.closing_date}
                      type="date"
                      />
                    </div>

                  </div>


                  </div>
                  
                  
                  <div id='deta' className='d-flex justify-content-center mt-3'>
                       
                        <button onClick={regSubmit} className='probtn' type='submit'><i>Create project</i></button>
                    </div>
                  
                    {/* <RaiseFormi /> */}
                </adminnew.Col>
            </adminnew.Row>
        </adminnew.Container>
    </div>
  )
}

export default AdminAddproject