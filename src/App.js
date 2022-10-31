import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/profile';
import Entity from './pages/Entity/Entity';
// import Register from './pages/Register/Register';
import ActiveProject from './pages/projects/ActiveProject';
import Newproject from './pages/projects/Newproject';
import ViewMoreprojects from './pages/projects/ViewMoreprojects';
import BuyShares from './pages/shares/BuyShares';
import Newshares from './pages/shares/Newshares';
import SellShares from './pages/shares/SellShares';
import Shares from './pages/shares/Shares';
import ViewMoreShares from './pages/shares/ViewMoreShares';
import Invest from './pages/invest/Invest';
import Raise from './pages/Raise/Raise';

import InvestorDelete from './pages/Admin/InvestorDelete';
import InvestorApproval from './pages/Admin/InvestorApproval';

import ProjectApproval from './pages/Admin/NewProjects/ProjectApproval';
import ProjectDelete from './pages/Admin/NewProjects/ProjectDelete';

import Forgot from './pages/Admin/forgot/Forgot';

import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.withCredentials = true;

axios.defaults.baseURL = "192.168.1.10:10002";
axios.defaults.headers.post["Content-Type"] = 'application/json';
axios.defaults.headers.post["Accept"] = 'application/json';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path ="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/entity" element={<Entity/>}/>
        <Route path="/activeprojects" element={<ActiveProject/>}/>
        <Route path="/newproject" element={<Newproject/>}/>
        <Route path="/viewmoreproject" element={<ViewMoreprojects/>}/>
        <Route path="/buyshares" element={<BuyShares/>}/>
        <Route path="/newshares" element={<Newshares/>}/>
        <Route path="/sellshares" element={<SellShares/>}/>
        <Route path="/viewmoreshares" element={<ViewMoreShares/>}/>
        <Route path="/shares" element={<Shares/>}/>
        <Route path="/invest" element={<Invest/>}/>
        <Route path="/raise" element={<Raise/>}/>

        <Route path="/projoApproval" element={<ProjectApproval/>}/>
        <Route path="/projoDelete" element={<ProjectDelete/>}/>
        <Route path="/investadminDelete" element={<InvestorDelete/>}/>
        <Route path="/investApproval" element={<InvestorApproval/>}/>

        <Route path="/forgot" element={<Forgot/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;