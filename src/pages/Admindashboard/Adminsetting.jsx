import { Sidebar } from "lucide-react";
import '../../cssfolder/Admindashboardcss/Adminsetting.css';
import Adminsidebar from "../../components/Adminsidebar";


export default function Adminsetting(){
  return(<>
  <Adminsidebar/>
<div>
    <div class="kfj-settings-container">
        <div class="kfj-settings-header">
            <h1 class="kfj-settings-title">Settings</h1>
            <div class="kfj-breadcrumb">
                <a href="#" class="kfj-breadcrumb-link">Home</a> / 
                <a href="#" class="kfj-breadcrumb-link">Settings</a> / 
                General Settings
            </div>
        </div>

        <div class="kfj-tabs-container">
            <nav class="kfj-tabs-nav">
                <button class="kfj-tab-button kfj-tab-active">General Settings</button>
                <button class="kfj-tab-button">Localization</button>
                <button class="kfj-tab-button">Payment Settings</button>
                <button class="kfj-tab-button">Email Settings</button>
                <button class="kfj-tab-button">Social Media Login</button>
                <button class="kfj-tab-button">Social Links</button>
                <button class="kfj-tab-button">SEO Settings</button>
                <button class="kfj-tab-button">Others</button>
            </nav>

            <form class="kfj-form-content">
                <div class="kfj-form-grid">
                    <div class="kfj-form-section">
                        <h2 class="kfj-section-title">Website Basic Details</h2>
                        
                        <div class="kfj-form-group">
                            <label class="kfj-form-label kfj-required">Website Name</label>
                            <input type="text" class="kfj-form-input" placeholder="Enter Website Name"/>
                        </div>

                        <div class="kfj-form-group">
                            <label class="kfj-form-label kfj-required">Logo</label>
                            <div class="kfj-upload-area">
                                <button type="button" class="kfj-upload-button">📁</button>
                                <div class="kfj-upload-text">Recommended image size is 150px x 150px</div>
                            </div>
                            <div class="kfj-logo-preview">
                                <div class="kfj-logo-icon">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                                <span class="kfj-logo-text">KofeJob</span>
                                <div class="kfj-remove-icon">×</div>
                            </div>
                        </div>

                        <div class="kfj-form-group">
                            <label class="kfj-form-label kfj-required">Favicon</label>
                            <div class="kfj-upload-area">
                                <button type="button" class="kfj-upload-button">📁</button>
                                <div class="kfj-upload-text">
                                    Recommended image size is 16px x 16px or 32px x 32px<br/>
                                    Accepted formats: only png and ico
                                </div>
                            </div>
                            <div class="kfj-favicon-preview">
                                <div class="kfj-favicon-icon">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                                <div class="kfj-remove-icon">×</div>
                            </div>
                        </div>

                        <div class="kfj-rtl-toggle">
                            <label class="kfj-toggle-label">RTL</label>
                            <div class="kfj-toggle-switch" onclick="toggleRTL(this)">
                                <div class="kfj-toggle-slider"></div>
                            </div>
                        </div>

                        <div class="kfj-button-group">
                            <button type="submit" class="kfj-btn kfj-btn-primary">Update</button>
                            <button type="button" class="kfj-btn kfj-btn-secondary">Cancel</button>
                        </div>
                    </div>

                    <div class="kfj-form-section">
                        <h2 class="kfj-section-title">Address Details</h2>
                        
                        <div class="kfj-form-group">
                            <label class="kfj-form-label kfj-required">Address Line 1</label>
                            <input type="text" class="kfj-form-input" placeholder="Enter Address Line 1"/>
                        </div>

                        <div class="kfj-form-group">
                            <label class="kfj-form-label">Address Line 2</label>
                            <input type="text" class="kfj-form-input" placeholder="Enter Address Line 2"/>
                        </div>

                        <div class="kfj-form-row">
                            <div class="kfj-form-group">
                                <label class="kfj-form-label kfj-required">City</label>
                                <input type="text" class="kfj-form-input"/>
                            </div>
                            <div class="kfj-form-group">
                                <label class="kfj-form-label">State/Province</label>
                                <select class="kfj-form-select">
                                    <option>Select</option>
                                </select>
                            </div>
                        </div>

                        <div class="kfj-form-row">
                            <div class="kfj-form-group">
                                <label class="kfj-form-label kfj-required">Zip/Postal Code</label>
                                <input type="text" class="kfj-form-input"/>
                            </div>
                            <div class="kfj-form-group">
                                <label class="kfj-form-label kfj-required">Country</label>
                                <select class="kfj-form-select">
                                    <option>Select</option>
                                </select>
                            </div>
                        </div>

                        <div class="kfj-button-group">
                            <button type="submit" class="kfj-btn kfj-btn-primary">Update</button>
                            <button type="button" class="kfj-btn kfj-btn-secondary">Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

</div>

  </>);
}