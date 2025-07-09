import './index.css'

import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage.jsx';
import UserLoginPage from './pages/Auth/UserLoginPage.jsx';

export default function App(){
    return(<>

    <Router>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/login/userlogin' element={<UserLoginPage/>}></Route>


        </Routes>

    </Router>
    </>
    );
}