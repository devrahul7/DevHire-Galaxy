import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Freelancerprofile from './components/Freelancerprofile.jsx'
import Freelancerdetails from './components/Freelancerdetails.jsx'
import Userdashboard from './components/Userdashboard.jsx'
import Admindashboard from './components/Admindashboard.jsx';






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

        
    </Router>
    </>
    );
}