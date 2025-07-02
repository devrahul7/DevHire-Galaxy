
import Usersidebar from '../../components/Usersidebar';
import '../../cssfolder/Userdashboardcss/Userproject.css';


export default function Userproject(){

    return (<>
    
    
    <div>
        <Usersidebar/>
    <div class="pd-dashboard">
        <div class="pd-container">
            <h1 class="pd-header">Ongoing Projects</h1>
            
            <div class="pd-projects-grid">
                 {/* Project 1  */}
                <div class="pd-project-card">
                    <div class="pd-project-main">
                        <div class="pd-project-content">
                            <h3 class="pd-project-title">Website Designer Required For Directory Theme</h3>
                            <div class="pd-project-details">
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Project Type</span>
                                    <span class="pd-detail-value">Hourly</span>
                                </div>
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Location</span>
                                    <span class="pd-detail-value">
                                        <span class="pd-flag-icon pd-flag-uk"></span>
                                        UK
                                    </span>
                                </div>
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Expiry</span>
                                    <span class="pd-detail-value pd-expiry">4 Days Left</span>
                                </div>
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Price</span>
                                    <span class="pd-detail-value pd-price">$500</span>
                                </div>
                            </div>
                        </div>
                        <div class="pd-actions">
                            <a href="#" class="pd-btn pd-btn-primary">View Details</a>
                        </div>
                    </div>
                </div>

                 {/* Sidebar Card 1  */}
                <div class="pd-sidebar-card">
                    <div class="pd-status pd-status-hired">Hired</div>
                    <div class="pd-avatar">
                        <span>HF</span>
                    </div>
                    <div class="pd-name">Hannah Finn</div>
                    <div class="pd-hire-date">Hired on 19 Sep 2023</div>
                </div>

                 {/* Project 2  */}
                <div class="pd-project-card">
                    <div class="pd-project-main">
                        <div class="pd-project-content">
                            <h3 class="pd-project-title">Landing Page Redesign / Sales Page Redesign</h3>
                            <div class="pd-project-details">
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Project Type</span>
                                    <span class="pd-detail-value">Fixed</span>
                                </div>
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Location</span>
                                    <span class="pd-detail-value">
                                        <span class="pd-flag-icon pd-flag-uk"></span>
                                        UK
                                    </span>
                                </div>
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Expiry</span>
                                    <span class="pd-detail-value pd-expiry">5 Days Left</span>
                                </div>
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Price</span>
                                    <span class="pd-detail-value pd-price">$280</span>
                                </div>
                            </div>
                        </div>
                        <div class="pd-actions">
                            <a href="#" class="pd-btn pd-btn-primary">Repost</a>
                            <a href="#" class="pd-btn pd-btn-danger">Delete</a>
                        </div>
                    </div>
                </div>

                 {/* Sidebar Card 2  */}
                <div class="pd-sidebar-card">
                    <div class="pd-status pd-status-hired">Hired</div>
                    <div class="pd-avatar">
                        <span>GE</span>
                    </div>
                    <div class="pd-name">Gerth Enoksen</div>
                    <div class="pd-status pd-status-completed">✓ Completed</div>
                    <div class="pd-rating">
                        <span class="pd-star">★</span>
                        <span class="pd-star">★</span>
                        <span class="pd-star">★</span>
                        <span class="pd-star">★</span>
                        <span class="pd-star pd-star-empty">★</span>
                        <span>4.5</span>
                    </div>
                </div>

                 {/* Project 3  */}
                <div class="pd-project-card">
                    <div class="pd-project-main">
                        <div class="pd-project-content">
                            <h3 class="pd-project-title">PHP Laravel Developer Required</h3>
                            <div class="pd-project-details">
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Project Type</span>
                                    <span class="pd-detail-value">Hourly</span>
                                </div>
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Location</span>
                                    <span class="pd-detail-value">
                                        <span class="pd-flag-icon pd-flag-uk"></span>
                                        UK
                                    </span>
                                </div>
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Expiry</span>
                                    <span class="pd-detail-value pd-expiry">3 Days Left</span>
                                </div>
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Price</span>
                                    <span class="pd-detail-value pd-price">$700</span>
                                </div>
                            </div>
                        </div>
                        <div class="pd-actions">
                            <a href="#" class="pd-btn pd-btn-primary">View Details</a>
                        </div>
                    </div>
                </div>

                 {/* Sidebar Card 3  */}
                <div class="pd-sidebar-card">
                    <div class="pd-proposal-count">27</div>
                    <div class="pd-proposal-label">Proposal</div>
                </div>

                 {/* Project 4  */}
                <div class="pd-project-card">
                    <div class="pd-project-main">
                        <div class="pd-project-content">
                            <h3 class="pd-project-title">WooCommerce Product Page Back Up Restoration</h3>
                            <div class="pd-project-details">
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Project Type</span>
                                    <span class="pd-detail-value">Hourly</span>
                                </div>
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Location</span>
                                    <span class="pd-detail-value">
                                        <span class="pd-flag-icon pd-flag-uk"></span>
                                        UK
                                    </span>
                                </div>
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Expiry</span>
                                    <span class="pd-detail-value pd-expiry">3 Days Left</span>
                                </div>
                                <div class="pd-detail-item">
                                    <span class="pd-detail-label">Price</span>
                                    <span class="pd-detail-value pd-price">$700</span>
                                </div>
                            </div>
                        </div>
                        <div class="pd-actions">
                            <a href="#" class="pd-btn pd-btn-primary">View Proposal</a>
                            <a href="#" class="pd-btn pd-btn-secondary">Edit Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    </>);
}