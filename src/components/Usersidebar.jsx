import { useNavigate } from 'react-router-dom'; 
import '../cssfolder/Usersidebar.css'; // Renamed CSS file


export default function Usersidebar(){
    const navigate = useNavigate(); 
    return (
        <>
            <div className="user-sidebar-container"> {/* Renamed class */}
                <div className="user-sidebar-section"> {/* Renamed class */}
                    <div className="user-sidebar-title">User Dashboard</div> {/* Renamed class */}
                    
                    <a className="user-sidebar-item active" onClick={() => navigate('/userdashboard')} > 📊 Dashboard</a> 
                    <a className="user-sidebar-item" onClick={() => navigate('/userprojects')} > 📁 Projects</a> 
                    <a className="user-sidebar-item" onClick={() => navigate('/userpostjob')} >  🗐 PostJob</a> 
                    <a className="user-sidebar-item" onClick={() => navigate('/userhiredev')} > 🗔 HireDev</a> 
                    <a className="user-sidebar-item" onClick={() => navigate('/userreview')} > 💬 Reviews </a> 
                    <a className="user-sidebar-item" onClick={() => navigate('/userpayment')} > 💰 payments</a> 
                    <a className="user-sidebar-item" onClick={() => navigate('/usersetting')} > ⚙️ Settings</a> 
                    <a className="user-sidebar-item"  > 🪩  logout</a> 
                </div>
            </div>
        </>
    );
}