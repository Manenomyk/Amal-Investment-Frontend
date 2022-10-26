import React from 'react';
import {Link} from "react-router-dom";
import { useState } from "react";
import {FaUpload } from "react-icons/fa";
import Sidebar from "../../components/sidebar/Sidebar"
import axios from 'axios';


import "./Etity.css"
import ProfileNav from '../../components/card/ProfileNav';

function Entity() {

    const [popup, setPopup]=useState(false);
  
    const togglePopup = () => {
        setPopup(!popup)
    };
  
    if(popup){
      document.body.classList.add('active')
    }
    else{
      document.body.classList.remove('active')
    }
    
    const [directorName, setDname] = useState("");
    const [email, setDEmail ] = useState("")
    const [entityName, setEname] = useState("")
    const [entityAddress, setEaddress] = useState("")
    const [entityPhoneNumber, setEnumber] = useState("")
    const [entitySector, setEsector] = useState("")
    const [entityKraPin, setkrapin] = useState("")
    const [entityRegNumber, setregNumber] = useState("")
    const [regDocs, setregDoc] = useState({})
    const [copyOfId, setcopyId] = useState({})
    const [copyKraPin, setpinKra] = useState({})
    const [businessPermit, setpermit] = useState({})

    const [ takeInput,  entityInput]= useState({
      directorName: '',
      email: '',
      entityName: '',
      entityAddress: '',
      entityPhoneNumber: '',
      entitySector:'',
      entityKraPin:'',
      regDocs:'',
      copyOfId:'',
      copyKraPin:'',
      businessPermit:'',
      entityRegNumber:'',

});



const pageSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  if(e.target.files && e.target.files[0]){
    formData.append('regDocs', e.target.files[0]);
  }
    formData.append('directorName', directorName);
    formData.append('email', email);
    formData.append('entityAddress', entityAddress);
    formData.append('entityName', entityName);
    formData.append('entityPhoneNumber', entityPhoneNumber);
    formData.append('entitySector', entitySector)
    formData.append('entityKraPin', entityKraPin)
    formData.append('entityRegNumber', entityRegNumber)
    formData.append('regDocs', regDocs)
    formData.append('copyOfId', copyOfId)
    formData.append('copyKraPin', copyKraPin)
    formData.append('businessPermit', businessPermit)


  // const data = {
  //   firstName: takeInput.firstName,
  //   lastName: takeInput.lastName,
  //   phone: takeInput.phone,
  //   email: takeInput.email,
  //   citizenship: takeInput.citizenship,
  //   kra: takeInput.kra,
  //   idCopy: takeInput.idCopy,

  // }

axios.post(`/api/user/store-entity`, formData).then (res =>{
  
if(res.data.status === 200){

  localStorage.setItem('auth_token', res.data.token);
  localStorage.setItem('auth_name', res.data.firstName);

}else
{

  

}

});


}




  return (

<div>
  <Sidebar/>
  {/* <ProfileNav/> */}

{/* <body style= { {fontFamily: "arial", background:"#EFFAFF"} }> */}




{/* new changes */}
  <h2 id="ed" style= { { marginLeft: "25%", marginBottom: "15px",marginTop:"5%"} }><u>Edit profile</u></h2>
  
  <Link id='pers' to={"/Profile"} style= { { textDecoration: "none", height:"19px", padding:"1px", color: "black", paddingLeft:"5px", marginLeft: "34%", background: "white", marginBottom: "15px", borderRadius: "5px",
  marginRight: "15px", border: "1px solid gray", fontSize:"24px"} }> <i>Personal</i> </Link>
  
  <Link id='ent' to={"/Entity"} style= { { textDecoration: "none", height: "19px", padding:"1px",color: "black", paddingLeft:"5px",paddingRight:"5px",  background:"#00FFD4",  marginBottom:"5px",  borderRadius:"5px",
  marginRight:"15px", border: "1px solid gray", fontSize:"24px"} }> <i>Entity</i> </Link>


{/* new changes */}
  <div className="mike" style= { {background:"#EFFAFF",  boxShadow:"0px 3px 5px rgba(139, 137, 137, 0.5)",
  width: "60%", marginLeft: "28%", marginTop:"10px"} }>

    
  <form id='for' style= { { background:"#EFFAFF"} }>
    <div className="mike" style= { { display: "flex", marginLeft:"20px",paddingTop:"20px",
     gap:"20px"} }>
    <div >
      <label style= { { fontSize:"18px", color:" gray"} }>Director's name</label>
      <input name='directorName' value={directorName} onChange = {(e) => setDname(e.target.value)} type="text"  className="form-control" style= { { borderRadius:"0px", fontSize:"14px", height: "40px", width:"260px"} } />

    </div>
    <div  >
      <label style= { { fontSize:"18px", color:"gray", marginLeft:"80px"} }> Email</label>
      <input name='email' value={email} onChange = {(e) => setDEmail(e.target.value)} type="email"  className="form-control" style= { { marginLeft: "0px",marginLeft:"80px",borderRadius: "2px", fontSize:"14px", height:"40px", width: "260PX"} } />
    </div>
    <input name='regDocs' onChange = {(e) => setregDoc(e.target.files[0])} type="file" id='fil'  />
                  <label id='lab' htmlFor="fil" style={{fontSize:"p6",width:"200px", paddingTop:"5px", marginTop:"20px", marginLeft:"70px"}}>Upload reg documents<FaUpload style={{width:"20px", marginLeft:"4px"}}/></label>
                  

  </div>

  </form>


  <form id='for' style= { { background:"#EFFAFF"} }>
    <div  className="mike" style= { { display: "flex", marginLeft:"20px",
     gap: "20px"} }>
    <div >
      <label style= { { fontSize:"18px", color: "gray"} }>Entity name</label>
      <input  name='entityName' value={entityName} onChange = {(e) => setEname(e.target.value)} type="text"  className="form-control" style= { { marginLeft: "0px",marginRight:"80px",borderRadius: "2px", fontSize:"14px", height:"40px", width: "260PX"} } />

    </div>
    <div  >
      <label  style= { { fontSize:"18px", color:"gray",  marginLeft:"10px"} } >Entity address</label>
      <input name='entityAddress' value={entityAddress} onChange = {(e) => setEaddress(e.target.value)} type="text"  className="form-control" style= { { marginLeft: "0px",marginRight:"80px",borderRadius: "2px", fontSize:"14px", height:"40px", width: "260PX"} } />
    </div>

    <input name='copyOfId' onChange = {(e) => setcopyId(e.target.files[0])} type="file" id='fil1'  />
                  <label id='lab' htmlFor="fil1" style={{fontSize:"16px", paddingTop:"5px", marginTop:"20px", borderRadius:"5px",backgroundColor:"white", width:"200px",marginLeft:"-10px"}}>Upload copy of ID<FaUpload style={{width:"20px", marginLeft:"24px"}}/></label>
                  

  </div>

  </form>


  <form id='for' style= { { background:"#EFFAFF"}} >
    <div  className="mike" style= { { display:"flex", marginLeft:"20px",
     gap:"20px"}}>
    <div >
      <label style= { { fontSize: "18px", color:"gray"}}>Entity phone number</label>
      <input name='entityPhoneNumber' value={entityPhoneNumber} onChange = {(e) => setEnumber(e.target.value)} type="text"  className="form-control" style= { {marginLeft: "0px",borderRadius:"2px", fontSize: "8px",height: "40px",width: "260PX"}} />

    </div>
    <div  >
      <label  style= { { fontSize: "18px", color:"gray",marginLeft:"80px"}} >Entity sector</label>
       <input name='entitySector' value={entitySector} onChange = {(e) => setEsector(e.target.value)} type="text"  className="form-control" style= { { marginRight: "96px", marginLeft:"80px",borderRadius:"2px", fontSize:"8px", height:"40px",width: "260PX"}} />

    </div>

    <input name='copyKraPin' onChange = {(e) => setpinKra(e.target.files[0])} type="file" id='fil2'  />
                  <label id='lab' htmlFor="fil2" style={{fontSize:"16px", paddingTop:"5px", marginTop:"20px", borderRadius:"5px",backgroundColor:"white", width:"200px",marginLeft:"-25px"}}>Upload KRA pin<FaUpload style={{width:"25px", marginLeft:"32px"}}/></label>
      


  

  </div>

  </form>


  <form id='for' style= { { background: "#EFFAFF", paddingBottom:"10px"}}>
    <div  className="mike" style= { { display: "flex", marginLeft:"20px", gap:"20px"}}>
    <div >
      <label style= { { fontSize: "18px", color:"gray"}}>Entity KRA pin</label>
      <input name='entityKraPin' value={entityKraPin} onChange = {(e) => setkrapin(e.target.value)} type="text"  className="form-control" style= { { marginLeft: "0px",borderRadius:"2px", fontSize:"14px", height:" 40px",width: "260PX"}} />



    </div>
    <div  >
      <label  style= { { fontSize: "18px", color:"gray",  marginRight:"20px",marginLeft:"80px"}} >Entity reg number</label>
      <input name='entityRegNumber' value={entityRegNumber} onChange = {(e) => setregNumber(e.target.value)} type="number"  className="form-control"  style= { { marginLeft: "80px",borderRadius:"2px", fontSize:"14px", height:" 40px",width: "260PX"}} />
    </div>

    <input name='businessPermit' onChange = {(e) => setpermit(e.target.files[0])} type="file" id='fil3'  />
                  <label id='lab' htmlFor="fil3" style={{fontSize:"16px", paddingTop:"5px", marginTop:"20px", borderRadius:"5px",backgroundColor:"white",  width:"200px",marginLeft:"70px"}}>Upload business permit<FaUpload style={{width:"20px", marginLeft:"3px"}}/></label>
      
  
  </div>

  </form>

  </div>




<button  onClick ={pageSubmit}
        className="btnpop"  style= { { width:"110px",cursor: "pointer", padding:" 0", marginTop:"30px",  marginBottom: "30px",  borderRadius:"15px",
        marginRight:"40%", border: "1px solid gray", paddingRight:"3px", fontSize: "20px", color: "white", background: "#007CBA",paddingBottom:"35px",paddingLeft:"5px",paddingTop:"5px",paddingRight:"5px",
        height: "19px"}}>Add entity</button>

{popup && (

<div className="modal" id="modal">
<p className="sms">
    You have successfully added an entity.
    <button className="close-button"  id='shut' onClick={togglePopup}>
x
</button>
</p>

</div>

)}




<h3 style= { { marginLeft: "20%"}}><i>My entities</i></h3>


  <div style= { { marginLeft:"240px", marginTop:"10px"}}
  >
    <table  className="table" style= { { width: "70%",marginLeft:"15%"}}>
     
        <thead>
          <tr style= { { color: "gray", fontSize:"16px",  backgroundColor:"#EFFAFF", boxShadow:" 0px 3px 5px rgba(139, 137, 137, 0.5)" }} >
            <th scope="col">Entity name</th>
            <th scope="col">Sector</th>
            <th scope="col">Address</th>
            <th scope="col">Phone number</th>
            <th scope="col">KRA pin</th>
            <th scope="col">Company reg number</th>
           
          </tr>
        </thead>


  <tbody>
    <tr style= { { fontSize: "15px",height:"25px",color:"gray"}} >
      <th >Jenga builders</th>
      <td >Construction</td>
      <td>7135-00100</td>
      <td>07357549845</td>
      <td>A65249845</td>
      <td style={{paddingLeft:"20px"}}>7615765</td>
     
    </tr>
    <tr style= { { fontSize: "15px",height:"25px", color:"gray"}}>
      <th >Safi housing</th>
      <td>Real Estate</td>
      <td>6780-00300</td>
      <td>0715789098</td>
      <td>A46584697</td>
      <td style={{paddingLeft:"20px"}}>4157847</td>
    
    </tr>
    <tr style= { { fontSize: "15px",height:"25px", color:"gray"}}>
      <th scope="row">Pesa Holdings</th>
      <td>Investment</td>
      <td>827-00100</td>
      <td>0753632772</td>
      <td >A91235961</td>
      <td style={{paddingLeft:"20px"}}>6089681</td>
     
    </tr>
  </tbody>

       
      </table>
    </div>



    
{/* </body> */}


</div>

  )
}

export default Entity;
