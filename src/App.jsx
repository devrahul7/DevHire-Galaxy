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



export default function App(){
    return(<>
    <Router>
        <Routes>
            <Route path='/' element={<Freelancerdetails/>}></Route>
        </Routes>

        <Routes>
            <Route path='/freelancerprofile' element={<Freelancerprofile/>}></Route>
        </Routes>

        <Routes>
            <Route path='/userdashboard' element={<Userdashboard/>}></Route>
        </Routes>

        <Routes>
            <Route path='/admindashboard' element={<Admindashboard/>}></Route>
        </Routes>

        <Routes>
            <Route path='/adminprojects' element={<Adminprojects/>}></Route>
        </Routes>

        <Routes>
            <Route path='/adminfreelancer' element={<Adminfreelancer/>}></Route>
        </Routes>
        
        <Routes>
            <Route path='/admindeposit' element={<Admindeposit/>}></Route>
        </Routes>
        
        <Routes>
            <Route path='/adminwithdraw' element={<Adminwithdraw/>}></Route>
        </Routes>
        
        <Routes>
            <Route path='/adminroles' element={<Adminroles/>}></Route>
        </Routes>


    

    </Router>
    </>
    );
}