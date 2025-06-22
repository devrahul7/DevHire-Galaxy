import { useNavigate } from 'react-router-dom';
import '../cssfolder/Dsidebar.css'; // CSS file for developer sidebar

export default function Developersidebar(){
    const navigate = useNavigate();

    return (
        <>
            <div className="developer-sidebar-container">
                <div className="developer-sidebar-section">
                    <div className="developer-profile">
                        <div className="developer-profile-avatar">BB</div>
                        <div className="developer-profile-info">
                            <h3>Bruce Bush <span className="developer-profile-status"></span></h3>
                            <p className="developer-profile-username">@brucebush</p>
                        </div>
                    </div>

                    <div className="developer-sidebar-title">Developer Dashboard</div>
                    
                    <a className="developer-sidebar-item active" onClick={() => navigate('/developerdashboard')}>
                        📊 Dashboard
                    </a>
                    
                    <a className="developer-sidebar-item" onClick={() => navigate('/developerprojects')}>
                        📁 Projects
                    </a>
                    
                    <a className="developer-sidebar-item" onClick={() => navigate('/developerreviews')}>
                        ⭐ Reviews
                    </a>
                    
                    <a className="developer-sidebar-item" onClick={() => navigate('/developerpayments')}>
                        💳 Payments
                    </a>
                    
                    <a className="developer-sidebar-item" onClick={() => navigate('/developersettings')}>
                        ⚙️ Settings
                    </a>
                    
                    <a className="developer-sidebar-item">
                        🚪 Logout
                    </a>
                </div>
            </div>
        </>
    );
}