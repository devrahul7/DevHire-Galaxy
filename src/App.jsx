import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Freelancerprofile from './components/Freelancerprofile.jsx'
import Freelancerdetails from './components/Freelancerdetails.jsx'
import Userdashboard from './components/Userdashboard.jsx'
import Admindashboard from './components/Admindashboard.jsx';
import Adminprojects from './components/Adminprojects.jsx';
import Adminfreelancer from './components/Adminfreelancer.jsx';
import Admindeposit from './components/Admindeposit.jsx';






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


    </Router>
    </>
    );
}