<<<<<<< HEAD


import Register from "./pages/Register";
import Login from "./pages/Login";
import PostJob from "./pages/PostJob";
function App() {

  return (
    <>
     
      <Register/>
      <Login/>
      <PostJob/>
=======
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage.jsx';
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



export default function App(){
    return(<>
    <Router>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>

            <Route path='userhiredev' element={<Userhiredev/>}></Route>
           
            <Route path='/userfreelancerviewprofile' element={<Userfreelancerviewprofile/>}></Route>
            <Route path='/admindashboard' element={<Admindashboard/>}></Route>
            <Route path='/adminprojects' element={<Adminprojects/>}></Route>
            <Route path='/adminfreelancer' element={<Adminfreelancer/>}></Route>
            <Route path='/admindeposit' element={<Admindeposit/>}></Route>
            <Route path='/adminwithdraw' element={<Adminwithdraw/>}></Route>
            <Route path='/adminroles' element={<Adminroles/>}></Route>
            <Route path='/admintransaction' element={ <Admintransaction/> }></Route>
            <Route path='/adminreports' element={ <Adminreports/> }></Route>
            <Route path='/adminsetting' element={ <Adminsetting/> }></Route>



            <Route path='/userdashboard' element={<Userdashboard/>}></Route>
            <Route path='/userpayment' element={ <Userpayment/> }></Route>
            <Route path='/userprojects' element={ <Userproject/> }></Route>
            <Route path='/userpostjob' element={ <Userpostjob/>  }></Route>
            <Route path='/userreview' element={ <Userreview/>  }></Route>
            <Route path='/usersetting' element={ <Usersetting/>  }></Route>
            
            
             
            <Route path='/developerdashboard' element={ <Developerdashboard/>  }></Route>
            <Route path='/developerreviews' element={ <Developerreview/>  }></Route>
            <Route path='/developerprojects' element={ <Developerprojects/> }></Route>


            <Route path='/developerpayments' element={ <Developerpayment/>}></Route>
            
            
            
>>>>>>> 34e8bfeb1aed1e6ac90c898e7259ab2e6481ab88







<<<<<<< HEAD
=======

            

        </Routes>

    </Router>
>>>>>>> 34e8bfeb1aed1e6ac90c898e7259ab2e6481ab88
    </>
    );
}