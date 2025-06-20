
import { useNavigate } from 'react-router-dom'; 
import '../cssfolder/usersidebar.css';


export default function Usersidebar(){
     const navigate = useNavigate(); 
    return (<>
     <div class="sidebar">
            <div class="sidebar-section">
                <div class="sidebar-title">Main</div>
                
                <a  class="sidebar-item active" onClick={() => navigate('/userdashboard')} > 📊 Dashboard</a>
                <a  class="sidebar-item " onClick={() => navigate('/userprojects')} > 📁 Projects</a>
                <a  class="sidebar-item " onClick={() => navigate('/userreview')} > 💰 Reviews </a>
                <a  class="sidebar-item " onClick={() => navigate('/userpayment')} > 📊 payments</a>
                <a  class="sidebar-item " onClick={() => navigate('/usersetting')} > ⚙️ Settings</a>
                <a  class="sidebar-item " onClick={() => navigate('/userlogout')} > 👥 logout</a>
            </div>
        </div>

    </>);
}
