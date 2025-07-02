
import '../../cssfolder/Developerdashboardcss/Developerprojects.css';

import Developersidebar from "../../components/Developersidebar";


import georgeImage from '../.././assets/george.jpg';
import sitaImage from '../.././assets/sita.jpg';
import timothyImage from '../.././assets/timothy.jpeg';
import janetImage from '../.././assets/janet.avif';


export default function Developerprojects(){
    return(<>
    
    <Developersidebar/>
<div class="prop-sys-reset prop-sys-body">
    <div class="prop-main-container">
        <h1 class="prop-header-title">My Proposals</h1>
        
        {/*  Proposal 1  */}
        <div class="prop-card-wrapper">
            <div class="prop-card-header">
                <h2 class="prop-card-title">3D Renders and Amazon Product Store images/Video</h2>
                <div class="prop-card-actions">
                    <a href="#" class="prop-btn-edit">Edit Proposals</a>
                    <a href="#" class="prop-btn-view">View Project</a>
                    <a href="#" class="prop-btn-delete">Delete Proposal</a>
                </div>
            </div>
            <div class="prop-card-body">
                <div class="prop-profile-section">
                    
                    <img  src={janetImage} alt="janet Picture"  class="prop-profile-avatar"  />
                    <div class="prop-profile-name">janet Micheal</div>
                    <span class="prop-profile-badge">client</span>
                </div>
                <div class="prop-details-grid">
                    <div class="prop-detail-item">
                        <span class="prop-detail-label">Client Price</span>
                        <span class="prop-detail-value prop-price-client">$599.00</span>
                        <span class="prop-detail-meta">(Fixed)</span>
                    </div>
                    <div class="prop-detail-item">
                        <span class="prop-detail-label">Job Type</span>
                        <span class="prop-job-type">Hourly</span>
                    </div>
                    <div class="prop-detail-item">
                        <span class="prop-detail-label">Your Price</span>
                        <span class="prop-detail-value prop-price-amount">$500.00</span>
                        <span class="prop-detail-meta">(in 12 Days)</span>
                    </div>
                </div>
            </div>
        </div>

        {/*  Proposal 2  */}
        <div class="prop-card-wrapper">
            <div class="prop-card-header">
                <h2 class="prop-card-title">Landing Page Redesign / Sales Page Redesign (Not Entire Web)</h2>
                <div class="prop-card-actions">
                    <a href="#" class="prop-btn-edit">Edit Proposals</a>
                    <a href="#" class="prop-btn-view">View Project</a>
                    <a href="#" class="prop-btn-delete">Delete Proposal</a>
                </div>
            </div>
            <div class="prop-card-body">
                <div class="prop-profile-section">

                    <img  src={timothyImage} alt="timothy Picture"  class="prop-profile-avatar"  />

                    <div class="prop-profile-name">Timothy Paltridge</div>
                    <span class="prop-profile-badge">client</span>
                </div>
                <div class="prop-details-grid">
                    <div class="prop-detail-item">
                        <span class="prop-detail-label">Client Price</span>
                        <span class="prop-detail-value prop-price-client">$460.00</span>
                        <span class="prop-detail-meta">(Fixed)</span>
                    </div>
                    <div class="prop-detail-item">
                        <span class="prop-detail-label">Job Type</span>
                        <span class="prop-job-type">Hourly</span>
                    </div>
                    <div class="prop-detail-item">
                        <span class="prop-detail-label">Your Price</span>
                        <span class="prop-detail-value prop-price-amount">$420.00</span>
                        <span class="prop-detail-meta">(in 12 Days)</span>
                    </div>
                </div>
            </div>
        </div>

        {/*  Proposal 3  */}
        <div class="prop-card-wrapper">
            <div class="prop-card-header">
                <h2 class="prop-card-title">WooCommerce Product Page Back Up Restoration</h2>
                <div class="prop-card-actions">
                    <a href="#" class="prop-btn-edit">Edit Proposals</a>
                    <a href="#" class="prop-btn-view">View Project</a>
                    <a href="#" class="prop-btn-delete">Delete Proposal</a>
                </div>
            </div>
            <div class="prop-card-body">
                <div class="prop-profile-section">

                  <img  src={sitaImage} alt="Sita Picture"  class="prop-profile-avatar"  />

                    
                    <div class="prop-profile-name">Lily Lipscombe</div>
                    <span class="prop-profile-badge">client</span>
                </div>
                <div class="prop-details-grid">
                    <div class="prop-detail-item">
                        <span class="prop-detail-label">Client Price</span>
                        <span class="prop-detail-value prop-price-client">$370.00</span>
                        <span class="prop-detail-meta">(Fixed)</span>
                    </div>
                    <div class="prop-detail-item">
                        <span class="prop-detail-label">Job Type</span>
                        <span class="prop-job-type">Hourly</span>
                    </div>
                    <div class="prop-detail-item">
                        <span class="prop-detail-label">Your Price</span>
                        <span class="prop-detail-value prop-price-amount">$300.00</span>
                        <span class="prop-detail-meta">(in 12 Days)</span>
                    </div>
                </div>
            </div>
        </div>

        {/*  Proposal 4  */}
        <div class="prop-card-wrapper">
            <div class="prop-card-header">
                <h2 class="prop-card-title">Full-stack Developer to help us to build our</h2>
                <div class="prop-card-actions">
                    <a href="#" class="prop-btn-edit">Edit Proposals</a>
                    <a href="#" class="prop-btn-view">View Project</a>
                    <a href="#" class="prop-btn-delete">Delete Proposal</a>
                </div>
            </div>
            <div class="prop-card-body">
                <div class="prop-profile-section">

                    <img  src={georgeImage} alt="george Picture"  class="prop-profile-avatar"  />

                    <div class="prop-profile-name">George Gosman</div>
                    <span class="prop-profile-badge">client</span>
                </div>
                <div class="prop-details-grid">
                    <div class="prop-detail-item">
                        <span class="prop-detail-label">Client Price</span>
                        <span class="prop-detail-value prop-price-client">$490.00</span>
                        <span class="prop-detail-meta">(Fixed)</span>
                    </div>
                    <div class="prop-detail-item">
                        <span class="prop-detail-label">Job Type</span>
                        <span class="prop-job-type">Hourly</span>
                    </div>
                    <div class="prop-detail-item">
                        <span class="prop-detail-label">Your Price</span>
                        <span class="prop-detail-value prop-price-amount">$450.00</span>
                        <span class="prop-detail-meta">(in 12 Days)</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    </>);
}