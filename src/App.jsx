import Freelancerprofile from './components/Freelancerprofile.jsx'
import Freelancerdetails from './components/Freelancerdetails.jsx'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
export default function App(){
    return(<>
    <Router>
        <Routes>
            <Route path='/' element={<Freelancerdetails/>}></Route>
        </Routes>
        <Routes>
            <Route path='/profilepage' element={<Freelancerprofile/>}></Route>
        </Routes>
    </Router>
    </>
    );
}