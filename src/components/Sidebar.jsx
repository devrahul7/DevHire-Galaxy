import { useNavigate } from 'react-router-dom'; 
import '../cssfolder/Sidebar.css';


export default function Sidebar(){
     const navigate = useNavigate(); 
    return (<>
     <div class="sidebar">
            <div class="sidebar-section">
                <div class="sidebar-title">Main</div>
                
                <a  class="sidebar-item active" onClick={() => navigate('/admindashboard')} > 📊 Dashboard</a>
                <a  class="sidebar-item " onClick={() => navigate('/adminprojects')} > 📁 Projects</a>
                <a  class="sidebar-item " onClick={() => navigate('/')} > 👤 Freelancer</a>
                <a  class="sidebar-item " onClick={() => navigate('/admindeposit')} > 💰 Deposit </a>
                <a  class="sidebar-item " onClick={() => navigate('/adminwithdraw')} > 💸 Withdraw</a>
                <a  class="sidebar-item " onClick={() => navigate('/admintransaction')} > 📝 Transaction</a>
                <a  class="sidebar-item " onClick={() => navigate('/adminreports')} > 📊 Reports</a>
                <a  class="sidebar-item " onClick={() => navigate('/adminroles')} > 👥 Roles</a>
                <a  class="sidebar-item " onClick={() => navigate('/adminsetting')} > ⚙️ Settings</a>
            </div>
        </div>

    </>);
}