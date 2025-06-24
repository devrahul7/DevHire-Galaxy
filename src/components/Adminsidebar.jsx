import { useNavigate } from 'react-router-dom';
import '../cssfolder/Sidebar.css'; // Updated import path to the new CSS file

export default function Adminsidebar() {
    const navigate = useNavigate();

    return (
        <>
            <div className="admin-sidebar">
                <div className="admin-sidebar-section">
                    <div className="admin-sidebar-title">Admin Dashboard</div>

                    <a className="admin-sidebar-item active" onClick={() => navigate('/admindashboard')}> 📊 Dashboard</a>
                    <a className="admin-sidebar-item" onClick={() => navigate('/adminprojects')}> 📁 Projects</a>
                    <a className="admin-sidebar-item" onClick={() => navigate('/adminfreelancer')}> 👤 Freelancer</a>
                    <a className="admin-sidebar-item" onClick={() => navigate('/admindeposit')}> 💰 Deposit </a>
                    <a className="admin-sidebar-item" onClick={() => navigate('/adminwithdraw')}> 💸 Withdraw</a>
                    <a className="admin-sidebar-item" onClick={() => navigate('/admintransaction')}> 📝 Transaction</a>
                    <a className="admin-sidebar-item" onClick={() => navigate('/adminreports')}> 📊 Reports</a>
                    <a className="admin-sidebar-item" onClick={() => navigate('/adminroles')}> 👥 Roles</a>
                    <a className="admin-sidebar-item" onClick={() => navigate('/adminsetting')}> ⚙️ Settings</a>
                    <a className="admin-sidebar-item" onClick={() => navigate('/') }> 🪩 Logout</a>
                </div>
            </div>
        </>
    );
}