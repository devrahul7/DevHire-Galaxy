import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Userdashboard from './pages/Userdashboard/Userdashboard.jsx';
import Admindashboard from './pages/Admindashboard/Admindashboard.jsx';
import Adminprojects from './pages/Admindashboard/Adminprojects.jsx';
import Adminfreelancer from './pages/Admindashboard/Adminfreelancer.jsx';
import Admindeposit from './pages/Admindashboard/Admindeposit.jsx';
import Adminwithdraw from './pages/Admindashboard/Adminwithdraw.jsx';
import Adminroles from './pages/Admindashboard/Adminroles.jsx';
import Admintransaction from './pages/Admindashboard/Admintransaction.jsx';
import Adminreports from './pages/Admindashboard/Adminreports.jsx';
import Adminsetting from './pages/Admindashboard/Adminsetting.jsx';

import Userhiredev from './pages/Userdashboard/Userhiredev.jsx';
import Userfreelancerviewprofile from './pages/Userdashboard/Userfreelancerviewprofile.jsx';
import Userpayment from './pages/Userdashboard/Userpayment.jsx';
import Userproject from './pages/Userdashboard/Userproject.jsx';
import Userpostjob from './pages/Userdashboard/Userpostjob.jsx';
import Userreview from './pages/Userdashboard/Userreview.jsx';
import Usersetting from './pages/Userdashboard/Usersetting.jsx';

import Developerdashboard from './pages/Developerdashboard/Developerdashboard.jsx';
import Developerreview from './pages/Developerdashboard/Developerreview.jsx';
import Developerprojects from './pages/Developerdashboard/Developerprojects.jsx';

import Developerpayment from './pages/Developerdashboard/Developerpayment.jsx';
import Login from './pages/Login.jsx';
import Register from'./pages/Register.jsx';
import Homepage from './pages/Homepage.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path ='/' element={<Homepage/>}/>
        <Route path ='/login' element={<Login/ >}/>
        <Route path ='/register' element={<Register/ >}/>
        <Route path='userhiredev' element={<Userhiredev />} />
        <Route path='/userfreelancerviewprofile' element={<Userfreelancerviewprofile />} />
        <Route path='/admindashboard' element={<Admindashboard />} />
        <Route path='/adminprojects' element={<Adminprojects />} />
        <Route path='/adminfreelancer' element={<Adminfreelancer />} />
        <Route path='/admindeposit' element={<Admindeposit />} />
        <Route path='/adminwithdraw' element={<Adminwithdraw />} />
        <Route path='/adminroles' element={<Adminroles />} />
        <Route path='/admintransaction' element={<Admintransaction />} />
        <Route path='/adminreports' element={<Adminreports />} />
        <Route path='/adminsetting' element={<Adminsetting />} />
        <Route path='/userdashboard' element={<Userdashboard />} />
        <Route path='/userpayment' element={<Userpayment />} />
        <Route path='/userprojects' element={<Userproject />} />
        <Route path='/userpostjob' element={<Userpostjob />} />
        <Route path='/userreview' element={<Userreview />} />
        <Route path='/usersetting' element={<Usersetting />} />
        <Route path='/developerdashboard' element={<Developerdashboard />} />
        <Route path='/developerreviews' element={<Developerreview />} />
        <Route path='/developerprojects' element={<Developerprojects />} />
        <Route path='/developerpayments' element={<Developerpayment />} />
      </Routes>
    </Router>
  );
}
