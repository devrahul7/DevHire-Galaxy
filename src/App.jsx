import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Freelancerprofile from './pages/Freelancerprofile.jsx'
import Freelancerdetails from './pages/Freelancerdetails.jsx'
import Userdashboard from './pages/Userdashboard.jsx'
import Admindashboard from './pages/Admindashboard.jsx';
import Adminprojects from './pages/Adminprojects.jsx';
import Adminfreelancer from './pages/Adminfreelancer.jsx';
import Admindeposit from './pages/Admindeposit.jsx';
import Adminwithdraw from './pages/Adminwithdraw.jsx';


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


    

    </Router>
    </>
    );
}