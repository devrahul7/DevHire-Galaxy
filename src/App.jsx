import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Freelancerprofile from './pages/Freelancer/Freelancerprofile.jsx';
import Freelancerdetails from './pages/Freelancer/Freelancerdetails.jsx';
import Userdashboard from './pages/Userdashboard/Userdashboard.jsx';
import Admindashboard from './pages/Admindashboard/Admindashboard.jsx';
import Adminprojects from './pages/Admindashboard/Adminprojects.jsx';
import Adminfreelancer from './pages/Admindashboard/Adminfreelancer.jsx';
import Admindeposit from './pages/Admindashboard/Admindeposit.jsx';
import Adminwithdraw from './pages/Admindashboard/Adminwithdraw.jsx';
import Adminroles from './pages/Admindashboard/Adminroles.jsx';
import Admintransaction from './pages/Admindashboard/Admintransaction.jsx';



export default function App(){
    return(<>
    <Router>
        <Routes>
            <Route path='/' element={<Freelancerdetails/>}></Route>
       
            <Route path='/freelancerprofile' element={<Freelancerprofile/>}></Route>
    
        
            <Route path='/userdashboard' element={<Userdashboard/>}></Route>
     
       
            <Route path='/admindashboard' element={<Admindashboard/>}></Route>

            <Route path='/adminprojects' element={<Adminprojects/>}></Route>
       
            <Route path='/adminfreelancer' element={<Adminfreelancer/>}></Route>
      
            <Route path='/admindeposit' element={<Admindeposit/>}></Route>
        
            <Route path='/adminwithdraw' element={<Adminwithdraw/>}></Route>
    
            <Route path='/adminroles' element={<Adminroles/>}></Route>

            <Route path='/admintransaction' element={ <Admintransaction/> }></Route>


        </Routes>

    </Router>
    </>
    );
}